import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  // Fetch progress of the authenticated user
  @Get()
  async fetchUserProgress(@Req() req) {
    const userId = req.user?.id; // Assumes user authentication middleware adds the user object
    if (!userId) {
      throw new Error('Authentication required');
    }
    return await this.progressService.fetchUserProgress(userId);
  }

  // Fetch progress for all users in a specific course
  @Get('/courses/:id')
  async fetchCourseProgress(@Param('id') courseId: string) {
    return await this.progressService.fetchCourseProgress(courseId);
  }

  // Add or update a user's progress
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addOrUpdateProgress(@Body() progressData) {
    return await this.progressService.addOrUpdateProgress(progressData);
  }
}
