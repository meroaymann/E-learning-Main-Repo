// authentication_logs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthenticationLog, AuthenticationLogDocument } from './models/authlogs.schema';

@Injectable()
export class AuthenticationLogService {
  constructor(
    @InjectModel(AuthenticationLog.name)
    private readonly authenticationLogModel: Model<AuthenticationLogDocument>,
  ) {}

  async findAll(): Promise<AuthenticationLog[]> {
    return this.authenticationLogModel.find().exec();
  }

  async create(authenticationLog: Partial<AuthenticationLog>): Promise<AuthenticationLog> {
    const newLog = new this.authenticationLogModel(authenticationLog);
    return newLog.save(); 
  }
}