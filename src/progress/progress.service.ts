import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progress, ProgressDocument } from './models/progress.schema';
import { CreateProgressDTO } from './DTOs/CreateProgressDto';
import { UpdateProgressDTO } from './DTOs/UpdateProgressDto'; 

@Injectable()
export class ProgressService {
  constructor(@InjectModel(Progress.name) private progressModel: Model<ProgressDocument>) {}

  // Create a new progress record
  async createProgress(createProgressDto: CreateProgressDTO): Promise<Progress> {
    const progress = new this.progressModel(createProgressDto);
    return await progress.save();
  }

  // Get progress details by userId and courseId
  async getProgressByUserAndCourse(userId: string, courseId: string): Promise<Progress> {
    return await this.progressModel.findOne({ userId, courseId }).exec();
  }

  // Update an existing progress record
  async updateProgress(id: string, updateProgressDto: UpdateProgressDTO): Promise<Progress> {
    return await this.progressModel.findByIdAndUpdate(id, updateProgressDto, { new: true }).exec();
  }

  // Delete a progress record
  async deleteProgress(id: string): Promise<void> {
    await this.progressModel.findByIdAndDelete(id).exec();
  }
}
