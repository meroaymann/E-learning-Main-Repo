export class UpdateNoteDto {
  courseId?: string; // Associated course ID (optional)
  moduleId?: string; // Associated module ID (optional)
  isPrivate?: string; // Only display for the creator on modules (Yes, No) (optional)
  content?: string; // Content of the note (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}