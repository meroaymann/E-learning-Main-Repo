import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModuleDocument = Document & Module;

@Schema()
export class Module {
  @Prop({ required: true })
  id: string; // Unique identifier for the module

  @Prop({ required: true })
  courseId: string; // Associated course ID

  @Prop({ required: true })
  title: string; // Title of the module

  @Prop({ required: true })
  content: string; // Content of the module

  @Prop({ required: true })
  moduleVersion: string; // Last version number of the module

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isActive: string; // The module is active (Yes, No)

  @Prop({ required: true, enum: ['easy', 'medium', 'hard'] })
  difficultyLevel: string; // Difficulty level (easy, medium, hard)

  @Prop({ type: [String], required: false })
  resources?: string[]; // Array of URLs to additional resources (optional)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const ModulesSchema = SchemaFactory.createForClass(Module);
