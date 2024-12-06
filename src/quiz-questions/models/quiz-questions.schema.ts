import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizQuestionDocument = Document & QuizQuestion;

@Schema()
export class QuizQuestion {
  @Prop({ required: true })
  quizQuestionId: string; // Unique identifier for the quiz question

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  moduleId: string; // Associated module ID

  @Prop({ required: true })
  quizId: string; // Associated quiz ID

  @Prop({ required: true })
  questionBankId: string; // Associated question bank ID

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const QuizQuestionsSchema = SchemaFactory.createForClass(QuizQuestion);