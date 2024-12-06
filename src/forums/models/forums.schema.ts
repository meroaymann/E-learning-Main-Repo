import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ForumDocument = Document & Forum;

@Schema()
export class Forum {
  @Prop({ required: true })
  forumId: string; // Unique identifier for the forum

  @Prop({ required: true })
  userId: string; // User who created the forum

  @Prop({ required: false })
  courseId?: string; // Associated course ID (optional)

  @Prop({ required: true })
  content: string; // Content of the forum

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'No' })
  isClosed: string; // The discussion is closed, no more replies (Yes, No)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ForumsSchema = SchemaFactory.createForClass(Forum);