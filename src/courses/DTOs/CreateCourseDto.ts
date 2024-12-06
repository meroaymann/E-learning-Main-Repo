export class CreateCoursesDto {
  courseId: string; // Unique identifier for the course
  title: string; // Title of the course
  description: string; // Brief description of the course
  category: string; // Course category (e.g., Math, CS)
  difficultyLevel: string; // Difficulty level (Beginner, Intermediate, Advanced)
  minCoursePercentage: number; // Percentage to proceed for the next course in the learning path sequence
  isActive: string; // The course is active (Yes, No)
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}