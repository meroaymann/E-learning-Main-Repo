import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionsBankDocument = Document & QuestionsBank;

@Schema()
export class QuestionsBank {
  @Prop({ required: true })
  questionBankId: string; // Unique identifier for the question bank

  @Prop({ required: true })
  moduleId: string; // Associated module ID

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  questionTitle: string; // The question title

  @Prop({ required: true, enum: ['MCQ', 'TFQ'] })
  questionType: string; // The question type (MCQ, TFQ)

  @Prop({ required: true })
  questionScore: number; // The question score

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isActive: string; // The question_bank is active (Yes, No)

  @Prop({ required: true, enum: ['easy', 'medium', 'hard'] })
  difficultyLevel: string; // Difficulty level (easy, medium, hard)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const QuestionsBankSchema = SchemaFactory.createForClass(QuestionsBank);