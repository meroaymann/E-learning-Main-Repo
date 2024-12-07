import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './models/quizzes.schema';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name)
    private readonly quizModel: Model<QuizDocument>,
  ) {}

  // Create a quiz for a module
  async create(moduleId: string, data: Partial<Quiz>): Promise<Quiz> {
    const newQuiz = new this.quizModel({ ...data, moduleId });
    return await newQuiz.save();
  }

  // Get all quizzes for a module
  async findAllByModuleId(moduleId: string): Promise<Quiz[]> {
    return await this.quizModel.find({ moduleId }).exec();
  }

  // Get details of a specific quiz
  async findById(id: string): Promise<Quiz> {
    const quiz = await this.quizModel.findById(id).exec();
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return quiz;
  }

  // Update quiz details
  async update(id: string, data: Partial<Quiz>): Promise<Quiz> {
    const updatedQuiz = await this.quizModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedQuiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return updatedQuiz;
  }

  // Delete a quiz
  async delete(id: string): Promise<void> {
    const result = await this.quizModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
  }
}
