import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Document & Quiz;

@Schema()
export class Quiz {
  @Prop({ required: true })
  quizId: string; // Unique identifier for the quiz

  @Prop({ required: true })
  quizTitle: string; // Title of the quiz

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

  @Prop({ required: true })
  maxQuestions: number; // Maximum number of questions

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isActive: string; // The quiz is active (Yes, No)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of quiz creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const QuizzesSchema = SchemaFactory.createForClass(Quiz);
