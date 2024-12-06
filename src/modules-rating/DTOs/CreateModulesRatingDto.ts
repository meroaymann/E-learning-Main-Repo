export class CreateModuleRatingDto {
    moduleRateId: string; // Unique identifier for the module rate
    moduleId: string; // Associated module ID
    courseId: string; // Associated course ID
    userId: string; // Associated user ID
    rateScore: number; // Rating score up to 5 stars
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  