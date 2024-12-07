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

  // Fetch all performance ranges
  async findAll(): Promise<PerformanceRange[]> {
    return await this.performanceRangeModel.find().exec();
  }

  // Create a new performance range
  async create(data: Partial<PerformanceRange>): Promise<PerformanceRange> {
    const newPerformanceRange = new this.performanceRangeModel(data);
    return await newPerformanceRange.save();
  }

  // Update a performance range
  async update(
    id: string,
    data: Partial<PerformanceRange>,
  ): Promise<PerformanceRange> {
    const updatedRange = await this.performanceRangeModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updatedRange) {
      throw new NotFoundException(`Performance Range with ID ${id} not found`);
    }

    return updatedRange;
  }

  // Delete a performance range
  async delete(id: string): Promise<void> {
    const result = await this.performanceRangeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Performance Range with ID ${id} not found`);
    }
  }
}
