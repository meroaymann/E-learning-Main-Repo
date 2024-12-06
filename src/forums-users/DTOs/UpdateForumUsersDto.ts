export class UpdateForumUserDto {
    isBlocked?: string; // The discussion is closed, no more reply (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  