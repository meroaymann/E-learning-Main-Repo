import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/users.schema';
import { CreateUsersDto } from './DTOs/CreateUserDto';
import { UpdateUsersDto } from './DTOs/UpdateUserDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
    async register(createUserDto: CreateUsersDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.passwordHash, 10);
    const user = new this.userModel({
      ...createUserDto,
      passwordHash: hashedPassword,
    });
    return user.save();
  }

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: user.userId, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async logout(): Promise<{ message: string }> {
    // Placeholder for token blacklist or session invalidation logic
    return { message: 'Logout successful' };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ userId });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async update(userId: string, updateUserDto: UpdateUsersDto): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ userId }, updateUserDto, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return updatedUser;
  }

  async activate(userId: string, isActive: string): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ userId }, { isActive }, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return updatedUser;
  }

  async remove(userId: string): Promise<{ message: string }> {
    const result = await this.userModel.deleteOne({ userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return { message: 'User deleted successfully' };
  }
}