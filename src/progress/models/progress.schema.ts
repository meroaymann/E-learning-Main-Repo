import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgressDocument = Document & Progress;

@Schema()
export class Progress {
  @Prop({ required: true })
  progressId: string; // Unique identifier for progress tracking

  @Prop({ required: true })
  userId: string; // Associated student user ID

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: false })
  courseSequence?: number; // Learning path sequence (optional)

  @Prop({ required: false })
  quizzesPercentage?: number; // Percentage of quizzes completed

  @Prop({ required: false, enum: ['Yes', 'No'], default: 'No' })
  quizzesCompleted?: string; // All quizzes completed (Yes, No)

  @Prop({ required: false })
  modulesPercentage?: number; // Percentage of modules completed

  @Prop({ required: false, enum: ['Yes', 'No'], default: 'No' })
  modulesCompleted?: string; // All modules completed (Yes, No)

  @Prop({ required: false })
  coursePercentage?: number; // Percentage of course completed

  @Prop({ required: false })
  performanceRangeId?: string; // Associated performance_range ID

  @Prop({ required: false, enum: ['Yes', 'No'], default: 'No' })
  courseCompleted?: string; // All course completed (Yes, No)

  @Prop({ required: false })
  rateCourse?: number; // Student rating of the course (up to five stars)

  @Prop({ required: false })
  courseFeedback?: string; // Student feedback for the course (text)

  @Prop({ required: false })
  rateInstructor?: number; // Student rating of the instructor (up to five stars)

  @Prop({ required: false })
  instructorFeedback?: string; // Student feedback for the instructor (text)

  @Prop({ required: false, default: () => new Date() })
  enrollDate?: Date; // Student enroll date

  @Prop({ required: false, default: () => new Date() })
  lastAccessed?: Date; // Last time the course was accessed

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);