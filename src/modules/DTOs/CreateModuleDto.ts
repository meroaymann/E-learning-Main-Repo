export class CreateModulesDto {
  moduleId: string; // Unique identifier for the module
  courseId: string; // Associated course ID
  title: string; // Title of the module
  content: string; // Content of the module
  moduleVersion: string; // Last version number of the module
  isActive: string; // The module is active (Yes, No)
  difficultyLevel: string; // Difficulty level (easy, medium, hard)
  resources?: string[]; // Array of URLs to additional resources (optional)
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}