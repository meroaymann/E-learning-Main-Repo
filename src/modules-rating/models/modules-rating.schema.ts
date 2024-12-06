import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModuleRatingDocument = Document & ModuleRating;

@Schema()
export class ModuleRating {
  @Prop({ required: true })
  moduleRateId: string; // Unique identifier for the module rate

  @Prop({ required: true })
  moduleId: string; // Associated module ID

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  userId: string; // Associated user ID

  @Prop({ required: true, min: 0, max: 5 })
  rateScore: number; // Rating score up to 5 stars

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ModuleRatingSchema = SchemaFactory.createForClass(ModuleRating);