import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionBankAnswerDocument = Document & QuestionBankAnswer;

@Schema()
export class QuestionBankAnswer {
  @Prop({ required: true })
  answerId: string; // Unique identifier for the answer

  @Prop({ required: true })
  questionBankId: string; // Associated question bank ID

  @Prop({ required: true })
  answerContent: string; // The answer content

  @Prop({ required: true, enum: ['Yes', 'No'] })
  isCorrect: string; // The answer is correct (Yes, No)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const QuestionBankAnswersSchema = SchemaFactory.createForClass(QuestionBankAnswer);