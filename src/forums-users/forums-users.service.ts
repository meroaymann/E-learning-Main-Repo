import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ForumUser, ForumUserDocument } from './models/forums-users.schema';
import { CreateForumUserDto } from './DTOs/CreateForumUsersDto';
import { UpdateForumUserDto } from './DTOs/UpdateForumUsersDto';

@Injectable()
export class ForumsUsersService {
  constructor(
    @InjectModel(ForumUser.name)
    private readonly forumUserModel: Model<ForumUserDocument>,
  ) {}

  async create(createForumUserDto: CreateForumUserDto): Promise<ForumUser> {
    const newForumUser = new this.forumUserModel(createForumUserDto);
    return await newForumUser.save();
  }

  async findAll(): Promise<ForumUser[]> {
    return await this.forumUserModel.find().exec();
  }

  async findOne(id: string): Promise<ForumUser> {
    const forumUser = await this.forumUserModel.findById(id).exec();
    if (!forumUser) {
      throw new NotFoundException(`Forum-User association with ID ${id} not found`);
    }
    return forumUser;
  }

  async remove(id: string): Promise<void> {
    const deletedForumUser = await this.forumUserModel.findByIdAndDelete(id).exec();
    if (!deletedForumUser) {
      throw new NotFoundException(`Forum-User association with ID ${id} not found`);
    }
  }

  async update(
    id: string,
    updateForumUserDto: UpdateForumUserDto,
  ): Promise<ForumUser> {
    const updatedForumUser = await this.forumUserModel
      .findByIdAndUpdate(id, updateForumUserDto, { new: true })
      .exec();
    if (!updatedForumUser) {
      throw new NotFoundException(`Forum-User association with ID ${id} not found`);
    }
    return updatedForumUser;
  }
}