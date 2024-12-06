export class CreateForumReplyDto {
    replyId: string; // Unique identifier for the reply
    userId: string; // User who submitted the reply
    forumId: string; // Associated forum ID
    parentReplyId?: string; // Associated parent reply ID (optional)
    replyContent: string; // Content of the reply
    replyLikeType: string; // Reply like type (Yes, No)
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  