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

  @Prop({ required: true })
  content: string; // Content of the note

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date; // Timestamp of note creation

  @Prop({ required: true, default: () => new Date() })
  lastUpdated: Date; // Last time the note was updated
}

export const NotesSchema = SchemaFactory.createForClass(Note);