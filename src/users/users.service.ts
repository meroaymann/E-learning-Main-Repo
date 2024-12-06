
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/users.schema';
import { CreateUserDTO } from './DTOs/CreateUserDto';
import { UpdateUserDTO } from './DTOs/UpdateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  // Create a new user
  async create(userData: CreateUserDTO): Promise<UserDocument> {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }

  // Find user by email
  async findByEmail(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({ email });
  }

  // Find user by ID
  async findById(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id);
  }

  // Find all users
  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find();
  }

  // Update a user's details by ID
  async update(id: string, updateData: UpdateUserDTO): Promise<UserDocument> {
    return await this.userModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  // Delete a user by ID
  async delete(id: string): Promise<UserDocument> {
    return await this.userModel.findByIdAndDelete(id);
  }

  // Additional method: Find by role
  async findByRole(role: string): Promise<UserDocument[]> {
    return await this.userModel.find({ role });
  }
}