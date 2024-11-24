import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Document & Course;

@Schema()
export class Course {
  @Prop({ required: true })
  id: string; // Unique identifier for the course

  @Prop({ required: true })
  title: string; // Title of the course

  @Prop({ required: true })
  description: string; // Brief description of the course

  @Prop({ required: true })
  category: string; // Course category (e.g., Math, CS)

  @Prop({ required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] })
  difficultyLevel: string; // Difficulty level

  @Prop({ required: true })
  createdBy: string; // Instructor who created the course

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of course creation
}

export const CoursesSchema = SchemaFactory.createForClass(Course);