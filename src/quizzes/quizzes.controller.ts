import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { QuizService } from './quizzes.service';
  import { Quiz } from './models/quizzes.schema';
  
  @Controller('quizzes')
  export class QuizController {
    constructor(private readonly quizService: QuizService) {}
  
    // Create a quiz for a module
    @Post('/modules/:id/quizzes')
    @HttpCode(HttpStatus.CREATED)
    async create(
      @Param('id') moduleId: string,
      @Body() body: Partial<Quiz>,
    ): Promise<Quiz> {
      return await this.quizService.create(moduleId, body);
    }
  
    // Get all quizzes for a module
    @Get('/modules/:id/quizzes')
    async findAllByModuleId(@Param('id') moduleId: string): Promise<Quiz[]> {
      return await this.quizService.findAllByModuleId(moduleId);
    }
  
    // Get details of a specific quiz
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Quiz> {
      return await this.quizService.findById(id);
    }
  
    // Update quiz details
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() body: Partial<Quiz>,
    ): Promise<Quiz> {
      return await this.quizService.update(id, body);
    }
  
    // Delete a quiz
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.quizService.delete(id);
    }
  }
  