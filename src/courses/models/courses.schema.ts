import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Document & Course;

@Schema()
export class Course {
  @Prop({ required: true })
  courseId: string; // Unique identifier for the course

  @Prop({ required: true })
  title: string; // Title of the course

  @Prop({ required: true })
  description: string; // Brief description of the course

  @Prop({ required: true })
  category: string; // Course category (e.g., Math, CS)

  @Prop({ required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] })
  difficultyLevel: string; // Difficulty level (Beginner, Intermediate, Advanced)

  @Prop({ required: true })
  minCoursePercentage: number; // Percentage to proceed for the next course in the learning path sequence

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isActive: string; // The course is active (Yes, No)

  @Prop({ required: true })
  createdBy: string; // instructor userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const CoursesSchema = SchemaFactory.createForClass(Course);