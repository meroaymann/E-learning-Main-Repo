  import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model, Types } from 'mongoose';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  import { RegisterRequestDto } from './DTOs/RegisterRequestdDto';
  import { User, UserDocument } from '../users/models/users.schema';

  @Injectable()
  export class AuthService {
    constructor(
      @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
      private readonly jwtService: JwtService
    ) {}
  
    async register(user: RegisterRequestDto): Promise<string> {
      const existingUser = await this.userModel.findOne({ email: user.email });
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(user.password, 10);
  
      const newUser = new this.userModel({
        ...user,
        passwordHash: hashedPassword,
        createdAt: new Date(),
      });
      await newUser.save();
  
      return 'Registered successfully';
    }
  
    async signIn(
      email: string,
      password: string
    ): Promise<{ access_token: string; payload: { userId: Types.ObjectId; role: string } }> {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      // Explicitly assert that user._id is a Types.ObjectId
      const userId = user._id as Types.ObjectId;
  
      const payload = { userId, role: user.role };
  
      return {
        access_token: await this.jwtService.signAsync(payload),
        payload,
      };
    }
  }