import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { PerformanceRangeService } from './performance-range.service';
  import { PerformanceRange } from './models/performance-range.schema';
  
  @Controller('performance-range')
  export class PerformanceRangeController {
    constructor(private readonly performanceRangeService: PerformanceRangeService) {}
  
    // Create a new PerformanceRange
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: Partial<PerformanceRange>): Promise<PerformanceRange> {
      return await this.performanceRangeService.create(body);
    }
  
    // Get all PerformanceRanges
    @Get()
    async findAll(): Promise<PerformanceRange[]> {
      return await this.performanceRangeService.findAll();
    }
  
    // Get a specific PerformanceRange by ID
    @Get(':id')
    async findById(@Param('id') id: string): Promise<PerformanceRange> {
      return await this.performanceRangeService.findById(id);
    }
  
    // Update a PerformanceRange by ID
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() body: Partial<PerformanceRange>,
    ): Promise<PerformanceRange> {
      return await this.performanceRangeService.update(id, body);
    }
  
    // Delete a PerformanceRange by ID
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.performanceRangeService.delete(id);
    }
  }
  