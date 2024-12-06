import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResponseDocument = Document & Response;

@Schema()
export class Response {
  @Prop({ required: true })
  responseId: string; // Unique identifier for the response

  @Prop({ required: true })
  userId: string; // User who submitted the response

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  moduleId: string; // Associated module ID

  @Prop({ required: true })
  quizId: string; // Associated quiz ID

  @Prop({ required: true })
  questionBankId: string; // Associated question ID

  @Prop({ required: true })
  selectedAnswer: string; // Associated answer ID

  @Prop({ required: true })
  correctAnswer: string; // Correct answer ID

  @Prop({ required: true })
  totalScore: number; // The original total score of the quiz questions

  @Prop({ required: true })
  totalReceived: number; // Total score received for the quiz

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ResponsesSchema = SchemaFactory.createForClass(Response);