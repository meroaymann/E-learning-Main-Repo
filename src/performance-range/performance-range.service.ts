import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformanceRange, PerformanceRangeDocument } from './models/performance-range.schema';

@Injectable()
export class PerformanceRangeService {
  constructor(
    @InjectModel(PerformanceRange.name)
    private readonly performanceRangeModel: Model<PerformanceRangeDocument>,
  ) {}

  // Create a new PerformanceRange
  async create(data: Partial<PerformanceRange>): Promise<PerformanceRange> {
    const newRange = new this.performanceRangeModel(data);
    return await newRange.save();
  }

  // Get all PerformanceRanges
  async findAll(): Promise<PerformanceRange[]> {
    return await this.performanceRangeModel.find().exec();
  }

  // Get a specific PerformanceRange by ID
  async findById(id: string): Promise<PerformanceRange> {
    const range = await this.performanceRangeModel.findById(id).exec();
    if (!range) {
      throw new NotFoundException(`PerformanceRange with ID ${id} not found`);
    }
    return range;
  }

  // Update a PerformanceRange by ID
  async update(
    id: string,
    data: Partial<PerformanceRange>,
  ): Promise<PerformanceRange> {
    const updatedRange = await this.performanceRangeModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updatedRange) {
      throw new NotFoundException(`PerformanceRange with ID ${id} not found`);
    }

    return updatedRange;
  }

  // Delete a PerformanceRange by ID
  async delete(id: string): Promise<void> {
    const result = await this.performanceRangeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`PerformanceRange with ID ${id} not found`);
    }
  }
}
