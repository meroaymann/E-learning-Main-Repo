export class UpdateModuleRatingDto {
    moduleId?: string; // Associated module ID (optional)
    courseId?: string; // Associated course ID (optional)
    userId?: string; // Associated user ID (optional)
    rateScore?: number; // Rating score up to 5 stars (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  