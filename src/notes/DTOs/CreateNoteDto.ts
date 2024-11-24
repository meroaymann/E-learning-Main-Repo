export class CreateNoteDTO {
    id: string;
    userId: string;
    courseId?: string; // Optional field
    content: string;
    createdAt: Date;
    lastUpdated: Date;
  }