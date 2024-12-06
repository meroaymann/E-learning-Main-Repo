export class UpdateCoursesDto {
  title?: string; // Title of the course (optional)
  description?: string; // Brief description of the course (optional)
  category?: string; // Course category (e.g., Math, CS) (optional)
  difficultyLevel?: string; // Difficulty level (Beginner, Intermediate, Advanced) (optional)
  minCoursePercentage?: number; // Percentage to proceed for the next course in the learning path sequence (optional)
  isActive?: string; // The course is active (Yes, No) (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}