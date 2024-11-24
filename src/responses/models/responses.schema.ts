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
  quizId: string; // Associated quiz ID

  @Prop({
    type: [
      {
        questionId: { type: String, required: true }, // ID of the question
        selectedAnswer: { type: String, required: true }, // User's selected answer
      },
    ],
    required: true,
  })
  answers: {
    questionId: string;
    selectedAnswer: string;
  }[]; // User’s answers to the quiz questions

  @Prop({ required: true })
  score: number; // Score received for the quiz

  @Prop({ required: true, default: () => new Date() })
  submittedAt: Date; // Timestamp of submission
}

export const ResponsesSchema = SchemaFactory.createForClass(Response);