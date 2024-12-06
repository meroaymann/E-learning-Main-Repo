export class CreateForumUserDto {
    forumUserId: string; // Unique identifier for the forum-user relationship
    forumId: string; // Associated forum ID
    userId: string; // User who created the forum
    isBlocked?: string; // The discussion is closed, no more reply (optional)
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  