import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    Query,
    Req,
    HttpCode,
    HttpStatus,
    ForbiddenException,
  } from '@nestjs/common';
  import { ModulesRatingService } from './modules-rating.service';
  
  @Controller('modules')
  export class ModulesRatingController {
    constructor(private readonly modulesRatingService: ModulesRatingService) {}
  
    // Add a rating for a module
    @Post(':id/ratings')
    @HttpCode(HttpStatus.CREATED)
    async addRating(
      @Param('id') moduleId: string,
      @Body('courseId') courseId: string,
      @Body('rateScore') rateScore: number,
      @Req() req,
    ) {
      const userId = req.user?.id; // Assumes user authentication middleware adds the user object
      if (!userId) {
        throw new ForbiddenException('Authentication required');
      }
      return await this.modulesRatingService.addRating(moduleId, courseId, userId, rateScore);
    }
  
    // Get all ratings for a module
    @Get(':id/ratings')
    async getModuleRatings(@Param('id') moduleId: string) {
      return await this.modulesRatingService.getModuleRatings(moduleId);
    }
  
    // Fetch all module ratings (Admin only)
    @Get('/ratings')
    async getAllRatings(@Req() req) {
      const userRole = req.user?.role; // Assumes role-based authentication middleware
      if (userRole !== 'admin') {
        throw new ForbiddenException('Only admins can access this resource');
      }
      return await this.modulesRatingService.getAllRatings();
    }
  }