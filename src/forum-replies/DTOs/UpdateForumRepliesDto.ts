export class UpdateForumReplyDto {
    parentReplyId?: string; // Associated parent reply ID (optional)
    replyContent?: string; // Content of the reply (optional)
    replyLikeType?: string; // Reply like type (Yes, No) (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  