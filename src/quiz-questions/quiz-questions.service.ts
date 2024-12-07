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
    const linkedQuestions = questions.map((question) => ({
      ...question,
      quizId,
    }));

    const createdDocs = await this.quizQuestionModel.insertMany(linkedQuestions);

    // Map Mongoose documents to plain QuizQuestion objects
    return createdDocs.map((doc) => ({
      quizQuestionId: doc.quizQuestionId,
      courseId: doc.courseId,
      moduleId: doc.moduleId,
      quizId: doc.quizId,
      questionBankId: doc.questionBankId,
      createdBy: doc.createdBy,
      createdAt: doc.createdAt,
      updatedBy: doc.updatedBy,
      updatedAt: doc.updatedAt,
    }));
  }

  // Get all questions linked to a quiz
  async getQuestionsByQuizId(quizId: string): Promise<QuizQuestion[]> {
    return await this.quizQuestionModel.find({ quizId }).exec();
  }

  // Unlink a question from a quiz
  async unlinkQuestion(id: string): Promise<void> {
    const result = await this.quizQuestionModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Quiz question with ID ${id} not found');
    }
  }
}