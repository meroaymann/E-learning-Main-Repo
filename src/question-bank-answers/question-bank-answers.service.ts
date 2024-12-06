import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionBankAnswer, QuestionBankAnswerDocument } from './models/question-bank-answers.schema';

@Injectable()
export class QuestionBankAnswerService {
  constructor(
    @InjectModel(QuestionBankAnswer.name)
    private readonly questionBankAnswerModel: Model<QuestionBankAnswerDocument>,
  ) {}

  // Create a new QuestionBankAnswer
  async create(data: Partial<QuestionBankAnswer>): Promise<QuestionBankAnswer> {
    const newAnswer = new this.questionBankAnswerModel(data);
    return await newAnswer.save();
  }

  // Get all QuestionBankAnswers
  async findAll(): Promise<QuestionBankAnswer[]> {
    return await this.questionBankAnswerModel.find().exec();
  }

  // Get a specific QuestionBankAnswer by ID
  async findById(id: string): Promise<QuestionBankAnswer> {
    const answer = await this.questionBankAnswerModel.findById(id).exec();
    if (!answer) {
      throw new NotFoundException(`QuestionBankAnswer with ID ${id} not found`);
    }
    return answer;
  }

  // Update a QuestionBankAnswer by ID
  async update(
    id: string,
    data: Partial<QuestionBankAnswer>,
  ): Promise<QuestionBankAnswer> {
    const updatedAnswer = await this.questionBankAnswerModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updatedAnswer) {
      throw new NotFoundException(`QuestionBankAnswer with ID ${id} not found`);
    }

    return updatedAnswer;
  }

  // Delete a QuestionBankAnswer by ID
  async delete(id: string): Promise<void> {
    const result = await this.questionBankAnswerModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`QuestionBankAnswer with ID ${id} not found`);
    }
  }
}
