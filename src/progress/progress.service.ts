import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progress, ProgressDocument } from './models/progress.schema';

@Injectable()
export class ProgressService {
  constructor(
    @InjectModel(Progress.name) private readonly progressModel: Model<ProgressDocument>,
  ) {}

  // Fetch progress for the authenticated user
  async fetchUserProgress(userId: string): Promise<Progress[]> {
    return await this.progressModel.find({ userId }).exec();
  }

  // Fetch progress for all users in a specific course
  async fetchCourseProgress(courseId: string): Promise<Progress[]> {
    return await this.progressModel.find({ courseId }).exec();
  }

  // Add or update a user's progress
  async addOrUpdateProgress(data: Partial<Progress>): Promise<Progress> {
    const { userId, courseId } = data;
    if (!userId || !courseId) {
      throw new Error('User ID and Course ID are required');
    }

    const existingProgress = await this.progressModel
      .findOne({ userId, courseId })
      .exec();

    if (existingProgress) {
      return await this.progressModel
        .findByIdAndUpdate(existingProgress._id, data, { new: true })
        .exec();
    }

    const newProgress = new this.progressModel(data);
    return await newProgress.save();
  }
}
