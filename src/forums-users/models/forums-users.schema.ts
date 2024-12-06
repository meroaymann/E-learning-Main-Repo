import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ForumUserDocument = Document & ForumUser;

@Schema()
export class ForumUser {
  @Prop({ required: true })
  forumUserId: string; // Unique identifier for the forum-user relationship

  @Prop({ required: true })
  forumId: string; // Associated forum ID

  @Prop({ required: true })
  userId: string; // User who created the forum

  @Prop({ required: false, enum: ['Yes', 'No'], default: 'No' })
  isBlocked?: string; // The discussion is closed, no more reply (optional)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ForumsUsersSchema = SchemaFactory.createForClass(ForumUser);