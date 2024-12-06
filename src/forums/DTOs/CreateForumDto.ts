export class CreateForumDto {
    forumId: string; // Unique identifier for the forum
    userId: string; // User who created the forum
    courseId?: string; // Associated course ID (optional)
    content: string; // Content of the forum
    isClosed: string; // The discussion is closed, no more replies (Yes, No)
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  