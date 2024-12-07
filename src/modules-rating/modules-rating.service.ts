import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleRating, ModuleRatingDocument } from './models/modules-rating.schema';

@Injectable()
export class ModulesRatingService {
  constructor(
    @InjectModel(ModuleRating.name) private readonly moduleRatingModel: Model<ModuleRatingDocument>,
  ) {}

  // Add a rating for a module
  async addRating(moduleId: string, courseId: string, userId: string, rateScore: number): Promise<ModuleRating> {
    const newRating = new this.moduleRatingModel({
      moduleRateId: `${moduleId}-${userId}`, // Fixed syntax: Use backticks for template literals
      moduleId,
      courseId,
      userId,
      rateScore,
      createdBy: userId,
    });
    return await newRating.save();
  }

  // Get all ratings for a module
  async getModuleRatings(moduleId: string): Promise<ModuleRating[]> {
    return await this.moduleRatingModel.find({ moduleId }).exec();
  }

  // Fetch all module ratings (Admin only)
  async getAllRatings(): Promise<ModuleRating[]> {
    return await this.moduleRatingModel.find().exec();
  }
}
