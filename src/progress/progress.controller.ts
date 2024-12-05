import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDTO } from './DTOs/CreateProgressDto';
import { UpdateProgressDTO } from './DTOs/UpdateProgressDto'; 
import { Progress, ProgressDocument } from './models/progress.schema';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  // Create a new progress record
  @Post()
  async createProgress(@Body() createProgressDto: CreateProgressDTO): Promise<Progress> {
    return await this.progressService.createProgress(createProgressDto);
  }

  // Get progress details by userId and courseId
  @Get(':userId/:courseId')
  async getProgressByUserAndCourse(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<Progress> {
    return await this.progressService.getProgressByUserAndCourse(userId, courseId);
  }

  // Update an existing progress record
  @Patch(':id')
  async updateProgress(
    @Param('id') id: string,
    @Body() updateProgressDto: UpdateProgressDTO,
  ): Promise<Progress> {
    return await this.progressService.updateProgress(id, updateProgressDto);
  }

  // Delete a progress record (Purpose remove a progress record)
  @Delete(':id')
  async deleteProgress(@Param('id') id: string): Promise<void> {
    return await this.progressService.deleteProgress(id);
  }
}
