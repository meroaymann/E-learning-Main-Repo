import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizQuestion, QuizQuestionDocument } from './models/quiz-questions.schema';

@Injectable()
export class QuizQuestionsService {
  constructor(
    @InjectModel(QuizQuestion.name)
    private readonly quizQuestionModel: Model<QuizQuestionDocument>,
  ) {}

  // Link questions to a quiz
  async linkQuestionsToQuiz(
    quizId: string,
    questions: Partial<QuizQuestion>[],
  ): Promise<QuizQuestion[]> {
    if (!quizId || !questions || !Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid quizId or questions input');
    }

    const linkedQuestions = questions.map((question) => ({
      ...question,
      quizId,
    }));

    try {
      return await this.quizQuestionModel.insertMany(linkedQuestions);
    } catch (error) {
      throw new Error(`Failed to link questions to quiz: ${error.message}`);
    }
  }

  // Get all questions linked to a quiz
  async getQuestionsByQuizId(quizId: string): Promise<QuizQuestion[]> {
    if (!quizId) {
      throw new Error('Quiz ID is required');
    }

    try {
      return await this.quizQuestionModel.find({ quizId }).exec();
    } catch (error) {
      throw new Error(`Failed to fetch questions for quiz ID ${quizId}: ${error.message}`);
    }
  }

  // Unlink a question from a quiz
  async unlinkQuestion(id: string): Promise<void> {
    if (!id) {
      throw new Error('Question ID is required');
    }

    try {
      const result = await this.quizQuestionModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Quiz question with ID ${id} not found`);
      }
    } catch (error) {
      throw new Error(`Failed to unlink question with ID ${id}: ${error.message}`);
    }
  }
}
