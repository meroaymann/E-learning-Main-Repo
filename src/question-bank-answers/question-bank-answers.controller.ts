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
  import { QuestionBankAnswerService } from './question-bank-answers.service';
  import { QuestionBankAnswer } from './models/question-bank-answers.schema';
  
  @Controller('question-bank-answers')
  export class QuestionBankAnswerController {
    constructor(private readonly questionBankAnswerService: QuestionBankAnswerService) {}
  
    // Create a new QuestionBankAnswer
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: Partial<QuestionBankAnswer>): Promise<QuestionBankAnswer> {
      return await this.questionBankAnswerService.create(body);
    }
  
    // Get all QuestionBankAnswers
    @Get()
    async findAll(): Promise<QuestionBankAnswer[]> {
      return await this.questionBankAnswerService.findAll();
    }
  
    // Get a specific QuestionBankAnswer by ID
    @Get(':id')
    async findById(@Param('id') id: string): Promise<QuestionBankAnswer> {
      return await this.questionBankAnswerService.findById(id);
    }
  
    // Update a QuestionBankAnswer by ID
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() body: Partial<QuestionBankAnswer>,
    ): Promise<QuestionBankAnswer> {
      return await this.questionBankAnswerService.update(id, body);
    }
  
    // Delete a QuestionBankAnswer by ID
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.questionBankAnswerService.delete(id);
    }
  }
  