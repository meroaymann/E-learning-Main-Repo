import {
    Controller,
    Post,
    Get,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { QuizQuestionsService } from './quiz-questions.service';
  import { QuizQuestion } from './models/quiz-questions.schema';
  
  @Controller('quiz_questions')
  export class QuizQuestionsController {
    constructor(private readonly quizQuestionsService: QuizQuestionsService) {}
  
    // Link questions to a quiz
    @Post('/quizzes/:id/questions')
    @HttpCode(HttpStatus.CREATED)
    async linkQuestionsToQuiz(
      @Param('id') quizId: string,
      @Body() questions: Partial<QuizQuestion>[],
    ): Promise<QuizQuestion[]> {
      return await this.quizQuestionsService.linkQuestionsToQuiz(quizId, questions);
    }
  
    // Get all questions linked to a quiz
    @Get('/quizzes/:id/questions')
    async getQuestionsByQuizId(@Param('id') quizId: string): Promise<QuizQuestion[]> {
      return await this.quizQuestionsService.getQuestionsByQuizId(quizId);
    }
  
    // Unlink a question from a quiz
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async unlinkQuestion(@Param('id') id: string): Promise<void> {
      return await this.quizQuestionsService.unlinkQuestion(id);
    }
  }
  