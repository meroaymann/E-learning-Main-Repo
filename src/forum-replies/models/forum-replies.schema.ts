import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ForumReplyDocument = Document & ForumReply;

@Schema()
export class ForumReply {
  @Prop({ required: true })
  replyId: string; // Unique identifier for the reply

  @Prop({ required: true })
  userId: string; // User who submitted the reply

  @Prop({ required: true })
  forumId: string; // Associated forum ID

  @Prop({ required: false })
  parentReplyId?: string; // Associated parent reply ID (optional)

  @Prop({ required: true })
  replyContent: string; // Content of the reply

  @Prop({ required: true, enum: ['Yes', 'No'] })
  replyLikeType: string; // Reply like type (Yes, No)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ForumRepliesSchema = SchemaFactory.createForClass(ForumReply);