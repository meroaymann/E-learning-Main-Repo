import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, ResponseDocument } from './models/responses.schema';
import { CreateResponseDto } from './DTOs/CreateResponseDto';
import { UpdateResponseDto } from './DTOs/UpdateResponseDto';

@Injectable()
export class ResponsesService {
  constructor(@InjectModel(Response.name) private responseModel: Model<ResponseDocument>) {}

  async create(createResponseDto: CreateResponseDto): Promise<Response> {
    const response = new this.responseModel(createResponseDto);
    return response.save();
  }

  async findAll(): Promise<Response[]> {
    return this.responseModel.find().exec();
  }

  async findOne(id: string): Promise<Response> {
    return this.responseModel.findById(id).exec();
  }

  async update(id: string, updateResponseDto: UpdateResponseDto): Promise<Response> {
    return this.responseModel.findByIdAndUpdate(id, updateResponseDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Response> {
    return await this.responseModel.findByIdAndDelete(id).exec();
  }  
}
