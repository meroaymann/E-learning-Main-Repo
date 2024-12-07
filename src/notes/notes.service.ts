import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './models/notes.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<NoteDocument>,
  ) {}

  // Create a new note
  async create(createNoteDto: Partial<Note>): Promise<Note> {
    const newNote = new this.noteModel(createNoteDto);
    return await newNote.save();
  }

  // Get all notes for the authenticated user
  async findAll(userId: string): Promise<Note[]> {
    return await this.noteModel.find({ userId }).exec();
  }

  // Get details of a specific note
  async findOne(noteId: string, userId: string): Promise<Note> {
    const note = await this.noteModel.findOne({ noteId, userId }).exec();
    if (!note) {
      throw new NotFoundException(`Note with ID ${noteId} not found`);
    }
    return note;
  }

  // Update a note
  async update(noteId: string, userId: string, updateNoteDto: Partial<Note>): Promise<Note> {
    const updatedNote = await this.noteModel
      .findOneAndUpdate({ noteId, userId }, updateNoteDto, { new: true })
      .exec();
    if (!updatedNote) {
      throw new NotFoundException(`Note with ID ${noteId} not found`);
    }
    return updatedNote;
  }

  // Delete a note
  async remove(noteId: string, userId: string): Promise<void> {
    const deletedNote = await this.noteModel.findOneAndDelete({ noteId, userId }).exec();
    if (!deletedNote) {
      throw new NotFoundException(`Note with ID ${noteId} not found`);
    }
  }
}
