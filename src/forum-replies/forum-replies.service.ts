import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ForumReply, ForumReplyDocument } from './models/forum-replies.schema';
import { CreateForumReplyDto } from './DTOs/CreateForumRepliesDto';
import { UpdateForumReplyDto } from './DTOs/UpdateForumRepliesDto';

@Injectable()
export class ForumRepliesService {
  constructor(
    @InjectModel(ForumReply.name)
    private readonly forumReplyModel: Model<ForumReplyDocument>,
  ) {}

  async create(createForumReplyDto: CreateForumReplyDto): Promise<ForumReply> {
    const newReply = new this.forumReplyModel(createForumReplyDto);
    return await newReply.save();
  }

  async findAllByForumId(forumId: string): Promise<ForumReply[]> {
    return await this.forumReplyModel.find({ forumId }).exec();
  }

  async findOne(replyId: string): Promise<ForumReply> {
    const reply = await this.forumReplyModel.findOne({ replyId }).exec();
    if (!reply) {
      throw new NotFoundException(`Reply with ID ${replyId} not found`);
    }
    return reply;
  }

  async update(
    replyId: string,
    updateForumReplyDto: UpdateForumReplyDto,
  ): Promise<ForumReply> {
    const updatedReply = await this.forumReplyModel
      .findOneAndUpdate({ replyId }, updateForumReplyDto, { new: true })
      .exec();
    if (!updatedReply) {
      throw new NotFoundException(`Reply with ID ${replyId} not found`);
    }
    return updatedReply;
  }

  async remove(replyId: string): Promise<void> {
    const deletedReply = await this.forumReplyModel
      .findOneAndDelete({ replyId })
      .exec();
    if (!deletedReply) {
      throw new NotFoundException(`Reply with ID ${replyId} not found`);
    }
  }
}