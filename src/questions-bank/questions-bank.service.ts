import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionsBank, QuestionsBankDocument } from './models/questions-bank.schema';

@Injectable()
export class QuestionsBankService {
  constructor(
    @InjectModel(QuestionsBank.name)
    private readonly questionsBankModel: Model<QuestionsBankDocument>,
  ) {}

  // Add a question to the question bank
  async create(moduleId: string, data: Partial<QuestionsBank>): Promise<QuestionsBank> {
    const newQuestion = new this.questionsBankModel({ ...data, moduleId });
    return await newQuestion.save();
  }

  // Get all questions for a module
  async findAllByModuleId(moduleId: string): Promise<QuestionsBank[]> {
    return await this.questionsBankModel.find({ moduleId }).exec();
  }

  // Get details of a specific question
  async findById(id: string): Promise<QuestionsBank> {
    const question = await this.questionsBankModel.findById(id).exec();
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }
    return question;
  }

  // Update a question in the question bank
  async update(id: string, data: Partial<QuestionsBank>): Promise<QuestionsBank> {
    const updatedQuestion = await this.questionsBankModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedQuestion) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }
    return updatedQuestion;
  }

  // Delete a question from the bank
  async delete(id: string): Promise<void> {
    const result = await this.questionsBankModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }
  }
}
