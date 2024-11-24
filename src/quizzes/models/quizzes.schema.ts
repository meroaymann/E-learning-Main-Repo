import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Document & Quiz;

@Schema()
export class Quiz {
  @Prop({ required: true })
  quizId: string; // Unique identifier for the quiz

  @Prop({ required: true })
  moduleId: string; // Associated module ID

  @Prop({ 
    type: [
      {
        question: { type: String, required: true }, // Question text
        options: { type: [String], required: true }, // Array of possible answers
        correctAnswer: { type: String, required: true }, // The correct answer
      },
    ],
    required: true,
  })
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[]; // Array of quiz questions

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of quiz creation
}

export const QuizzesSchema = SchemaFactory.createForClass(Quiz);