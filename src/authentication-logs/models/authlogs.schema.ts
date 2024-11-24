import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthenticationLogDocument = Document & AuthenticationLog;

@Schema()
export class AuthenticationLog {
  @Prop({ required: true })
  logId: string; // Unique identifier for the log

  @Prop({ required: true })
  userId: string; // User who authenticated

  @Prop({ required: true })
  event: string; // Event description (e.g., "Biometric Authentication")

  @Prop({ required: true, default: () => new Date() })
  timestamp: Date; // Timestamp of the event

  @Prop({ required: true, enum: ['Success', 'Failure'] })
  status: string; // Status of authentication (e.g., "Success", "Failure")
}

export const AuthenticationLogsSchema = SchemaFactory.createForClass(AuthenticationLog);