import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, ResponseDocument } from './models/responses.schema';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(Response.name)
    private readonly responseModel: Model<ResponseDocument>,
  ) {}

  // Submit quiz responses
  async submitResponse(responseData: Partial<Response>): Promise<Response> {
    const response = new this.responseModel(responseData);
    return await response.save();
  }

  // Get all responses for a quiz
  async getResponsesByQuizId(quizId: string): Promise<Response[]> {
    return await this.responseModel.find({ quizId }).exec();
  }

  // Get details of a specific response
  async getResponseById(id: string): Promise<Response> {
    const response = await this.responseModel.findById(id).exec();
    if (!response) {
      throw new NotFoundException(`Response with ID ${id} not found`);
    }
    return response;
  }

  // Delete a quiz response
  async deleteResponse(id: string): Promise<void> {
    const result = await this.responseModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Response with ID ${id} not found`);
    }
  }
}
