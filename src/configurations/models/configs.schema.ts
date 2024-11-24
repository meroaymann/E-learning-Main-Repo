import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConfigurationDocument = Document & Configuration;

@Schema()
export class Configuration {
  @Prop({ required: true })
  configId: string; // Unique identifier for the configuration

  @Prop({ required: true, type: Object })
  settings: Record<string, any>; // Key-value pairs for application settings

  @Prop({ required: true })
  updatedBy: string; // User who last updated the configuration

  @Prop({ required: true, default: () => new Date() })
  updatedAt: Date; // Timestamp of the last update
}

export const ConfigurationsSchema = SchemaFactory.createForClass(Configuration);