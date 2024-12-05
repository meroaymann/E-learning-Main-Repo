import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Document & User;

@Schema()
export class User {
  @Prop({ required: true })
  userId: string; // Unique identifier for the user

  @Prop({ required: true })
  name: string; // Full name of the user

  @Prop({ required: true, unique: true })
  email: string; // User’s email address

  @Prop({ required: true })
  passwordHash: string; // Hashed password for secure authentication

  @Prop({ required: true, enum: ['student', 'instructor', 'admin'] })
  role: string; // Role of the user (student, instructor, admin)

  @Prop({ required: false })
  profilePictureUrl?: string; // URL of the user’s profile picture (optional)

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isActive: string; // The user is active (Yes, No)

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record (optional)

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const UsersSchema = SchemaFactory.createForClass(User);
