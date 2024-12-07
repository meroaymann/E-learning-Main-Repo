import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PerformanceRangeService } from './performance-range.service';
import { PerformanceRange } from './models/performance-range.schema';

@Controller('performance_range')
export class PerformanceRangeController {
  constructor(
    private readonly performanceRangeService: PerformanceRangeService,
  ) {}

  // Fetch all performance ranges
  @Get()
  async findAll(): Promise<PerformanceRange[]> {
    return await this.performanceRangeService.findAll();
  }

  // Create a new performance range (Admin only)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() body: Partial<PerformanceRange>,
  ): Promise<PerformanceRange> {
    return await this.performanceRangeService.create(body);
  }

  // Update a performance range
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<PerformanceRange>,
  ): Promise<PerformanceRange> {
    return await this.performanceRangeService.update(id, body);
  }

  // Delete a performance range
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.performanceRangeService.delete(id);
  }
}
