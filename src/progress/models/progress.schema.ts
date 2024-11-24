import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgressDocument = Document & Progress;

@Schema()
export class Progress {
  @Prop({ required: true })
  progressId: string; // Unique identifier for progress tracking

  @Prop({ required: true })
  userId: string; // Associated user ID

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  completionPercentage: number; // Percentage of course completed

  @Prop({ required: true, default: () => new Date() })
  lastAccessed: Date; // Last time the course was accessed
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);