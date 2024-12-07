import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Forum, ForumDocument } from './models/forums.schema';
import { CreateForumDto } from './DTOs/CreateForumDto';
import { UpdateForumDto } from './DTOs/UpdateForumDto';

@Injectable()
export class ForumsService {
  constructor(
    @InjectModel(Forum.name) private readonly forumModel: Model<ForumDocument>,
  ) {}

  async create(createForumDto: CreateForumDto): Promise<Forum> {
    const newForum = new this.forumModel(createForumDto);
    return await newForum.save();
  }

  async findAll(): Promise<Forum[]> {
    return await this.forumModel.find().exec();
  }

  async findOne(id: string): Promise<Forum> {
    const forum = await this.forumModel.findById(id).exec();
    if (!forum) {
      throw new NotFoundException(`Forum with ID ${id} not found`);
    }
    return forum;
  }

  async update(id: string, updateForumDto: UpdateForumDto): Promise<Forum> {
    const updatedForum = await this.forumModel
      .findByIdAndUpdate(id, updateForumDto, { new: true })
      .exec();
    if (!updatedForum) {
      throw new NotFoundException(`Forum with ID ${id} not found`);
    }
    return updatedForum;
  }

  async remove(id: string): Promise<void> {
    const deletedForum = await this.forumModel.findByIdAndDelete(id).exec();
    if (!deletedForum) {
      throw new NotFoundException(`Forum with ID ${id} not found`);
    }
  }
}