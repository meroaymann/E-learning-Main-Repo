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

  @Prop({ type: [String], required: false })
  resources?: string[]; // Array of URLs to additional resources (optional)

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of module creation
}

export const ModulesSchema = SchemaFactory.createForClass(Module);