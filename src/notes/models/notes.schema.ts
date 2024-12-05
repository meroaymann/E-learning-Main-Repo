import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Document & Note;

@Schema()
export class Note {
  @Prop({ required: true })
  noteId: string; // Unique identifier for the note

  @Prop({ required: true })
  userId: string; // User who created the note

  @Prop({ required: false })
  courseId?: string; // Associated course ID (optional)

  @Prop({ required: false })
  moduleId?: string; // Associated module ID (optional)

  @Prop({ required: true, enum: ['Yes', 'No'], default: 'Yes' })
  isPrivate: string; // Only display for the creator on modules (Yes, No)

  @Prop({ required: true })
  content: string; // Content of the note

  @Prop({ required: true })
  createdBy: string; // userId who created the record

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of record creation

  @Prop({ required: false })
  updatedBy?: string; // userId who updated the record

  @Prop({ required: false })
  updatedAt?: Date; // Timestamp of record update (optional)
}

export const NotesSchema = SchemaFactory.createForClass(Note);
