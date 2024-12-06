export class UpdateForumDto {
    courseId?: string; // Associated course ID (optional)
    content?: string; // Content of the forum (optional)
    isClosed?: string; // The discussion is closed, no more replies (Yes, No) (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }