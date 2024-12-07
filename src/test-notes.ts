import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { NotesService } from 'src/notes/notes.service';
import { CreateNoteDto } from 'src/notes/DTOs/CreateNoteDto';
import { UpdateNoteDto } from 'src/notes/DTOs/UpdateNoteDto';

async function CreateNote() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const notesService = app.get(NotesService);

  // Example: Test the create method
  const createNoteDto: CreateNoteDto = {
    noteId: 'note001',
    userId: 'user123',
    courseId: 'course001',
    moduleId: 'module001',
    isPrivate: 'Yes',
    content: 'This is a test note content.',
    createdBy: 'user123',
    createdAt: new Date(),
  };

  const result = await notesService.create(createNoteDto);
  console.log('Note created successfully:', result);

  await app.close();
}

async function GetAllNotes(userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const notesService = app.get(NotesService);

  // Call the function to get all notes for a user
  await testGetAllNotes(notesService, userId);

  await app.close();
}

// Function to get all notes for a specific user
async function testGetAllNotes(notesService: NotesService, userId: string) {
  try {
    console.log(`Fetching notes for user ID: ${userId}`);
    const notes = await notesService.findAll(userId);
    console.log('Notes fetched successfully:', notes);
  } catch (error) {
    console.error('Error fetching notes:', error.message);
  }
}

async function GetNoteById(noteId: string, userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const notesService = app.get(NotesService);

  // Call the function to get a specific note by ID
  await testGetNoteById(notesService, noteId, userId);

  await app.close();
}

// Function to get details of a specific note by ID
async function testGetNoteById(notesService: NotesService, noteId: string, userId: string) {
  try {
    console.log(`Fetching note with ID: ${noteId} for user ID: ${userId}`);
    const note = await notesService.findOne(noteId, userId);
    console.log('Note fetched successfully:', note);
  } catch (error) {
    console.error(`Error fetching note with ID ${noteId}:`, error.message);
  }
}

async function UpdateNote(noteId: string, userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const notesService = app.get(NotesService);

  // Example note update data
  const updateNoteDto: UpdateNoteDto = {
    content: 'Updated note content.',
    isPrivate: 'No',
    updatedBy: 'user123',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdateNote(notesService, noteId, userId, updateNoteDto);

  await app.close();
}

// Function to update a note by ID
async function testUpdateNote(
  notesService: NotesService,
  noteId: string,
  userId: string,
  updateNoteDto: UpdateNoteDto,
) {
  try {
    console.log(`Attempting to update note with ID: ${noteId} for user ID: ${userId}`);
    const updatedNote = await notesService.update(noteId, userId, updateNoteDto);
    console.log('Note updated successfully:', updatedNote);
  } catch (error) {
    console.error('Error updating note:', error.message);
  }
}

async function DeleteNote(noteId: string, userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const notesService = app.get(NotesService);

  // Call the delete function
  await testDeleteNote(notesService, noteId, userId);

  await app.close();
}

// Function to delete a note by ID
async function testDeleteNote(notesService: NotesService, noteId: string, userId: string) {
  try {
    console.log(`Attempting to delete note with ID: ${noteId} for user ID: ${userId}`);
    await notesService.remove(noteId, userId);
    console.log('Note deleted successfully.');
  } catch (error) {
    console.error('Error deleting note:', error.message);
  }
}

// Example function calls
// CreateNote();
// GetAllNotes('user123');
// GetNoteById('note001', 'user123');
// UpdateNote('note001', 'user123');
// DeleteNote('note001', 'user123');
