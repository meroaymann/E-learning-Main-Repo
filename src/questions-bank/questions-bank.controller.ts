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
  import { QuestionsBankService } from './questions-bank.service';
  import { QuestionsBank } from './models/questions-bank.schema';
  
  @Controller('questions_bank')
  export class QuestionsBankController {
    constructor(private readonly questionsBankService: QuestionsBankService) {}
  
    // Add a question to the question bank
    @Post('/modules/:id/questions_bank')
    @HttpCode(HttpStatus.CREATED)
    async create(
      @Param('id') moduleId: string,
      @Body() body: Partial<QuestionsBank>,
    ): Promise<QuestionsBank> {
      return await this.questionsBankService.create(moduleId, body);
    }
  
    // Get all questions for a module
    @Get('/modules/:id/questions_bank')
    async findAllByModuleId(@Param('id') moduleId: string): Promise<QuestionsBank[]> {
      return await this.questionsBankService.findAllByModuleId(moduleId);
    }
  
    // Get details of a specific question
    @Get(':id')
    async findById(@Param('id') id: string): Promise<QuestionsBank> {
      return await this.questionsBankService.findById(id);
    }
  
    // Update a question in the question bank
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() body: Partial<QuestionsBank>,
    ): Promise<QuestionsBank> {
      return await this.questionsBankService.update(id, body);
    }
  
    // Delete a question from the bank
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.questionsBankService.delete(id);
    }
  }
  