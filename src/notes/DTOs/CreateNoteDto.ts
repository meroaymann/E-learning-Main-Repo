export class CreateNoteDto {
  noteId: string; // Unique identifier for the note
  userId: string; // User who created the note
  courseId?: string; // Associated course ID (optional)
  moduleId?: string; // Associated module ID (optional)
  isPrivate: string; // Only display for the creator on modules (Yes, No)
  content: string; // Content of the note
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}