import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PerformanceRangeDocument = Document & PerformanceRange;

@Schema()
export class PerformanceRange {
  @Prop({ required: true })
  performanceRangeId: string; // Unique identifier for the performance range

  @Prop({ required: true, enum: ['Below Average', 'Average', 'Above Average', 'Excellent'] })
  rangeName: string; // Below Average, Average, Above Average, Excellent

  @Prop({ required: true })
  minRange: number; // Minimum range

  @Prop({ required: true })
  maxRange: number; // Maximum range

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const PerformanceRangeSchema = SchemaFactory.createForClass(PerformanceRange);