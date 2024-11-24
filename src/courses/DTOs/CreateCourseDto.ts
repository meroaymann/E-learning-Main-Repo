export class CreateCourseDTO {
    id: string;
    title: string;
    description: string;
    category: string;
    difficultyLevel: string;
    createdBy: string; // Instructor ID
    createdAt: Date;
  }