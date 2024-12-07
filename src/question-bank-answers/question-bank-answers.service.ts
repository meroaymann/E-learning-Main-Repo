import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionBankAnswer, QuestionBankAnswerDocument } from './models/question-bank-answers.schema';

@Injectable()
export class QuestionBankAnswersService {
  constructor(
    @InjectModel(QuestionBankAnswer.name)
    private readonly questionBankAnswerModel: Model<QuestionBankAnswerDocument>,
  ) {}

  // Add answers to a question
  async create(questionBankId: string, data: Partial<QuestionBankAnswer>): Promise<QuestionBankAnswer> {
    const newAnswer = new this.questionBankAnswerModel({ ...data, questionBankId });
    return await newAnswer.save();
  }

  // Get all answers for a question
  async findAllByQuestionBankId(questionBankId: string): Promise<QuestionBankAnswer[]> {
    return await this.questionBankAnswerModel.find({ questionBankId }).exec();
  }

  // Get details of a specific answer
  async findById(id: string): Promise<QuestionBankAnswer> {
    const answer = await this.questionBankAnswerModel.findById(id).exec();
    if (!answer) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
    return answer;
  }

  // Update an answer
  async update(id: string, data: Partial<QuestionBankAnswer>): Promise<QuestionBankAnswer> {
    const updatedAnswer = await this.questionBankAnswerModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedAnswer) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
    return updatedAnswer;
  }

  // Delete an answer
  async delete(id: string): Promise<void> {
    const result = await this.questionBankAnswerModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
  }
}
