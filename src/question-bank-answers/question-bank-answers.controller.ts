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
import { QuestionBankAnswersService } from './question-bank-answers.service';
import { QuestionBankAnswer } from './models/question-bank-answers.schema';

@Controller('question_bank_answers')
export class QuestionBankAnswersController {
  constructor(private readonly questionBankAnswersService: QuestionBankAnswersService) {}

  // Add answers to a question
  @Post('/questions_bank/:id/answers')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('id') questionBankId: string,
    @Body() body: Partial<QuestionBankAnswer>,
  ): Promise<QuestionBankAnswer> {
    return await this.questionBankAnswersService.create(questionBankId, body);
  }

  // Get all answers for a question
  @Get('/questions_bank/:id/answers')
  async findAllByQuestionBankId(@Param('id') questionBankId: string): Promise<QuestionBankAnswer[]> {
    return await this.questionBankAnswersService.findAllByQuestionBankId(questionBankId);
  }

  // Get details of a specific answer
  @Get(':id')
  async findById(@Param('id') id: string): Promise<QuestionBankAnswer> {
    return await this.questionBankAnswersService.findById(id);
  }

  // Update an answer
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<QuestionBankAnswer>,
  ): Promise<QuestionBankAnswer> {
    return await this.questionBankAnswersService.update(id, body);
  }

  // Delete an answer
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.questionBankAnswersService.delete(id);
  }
}
