export class UpdateModulesDto {
  courseId?: string; // Associated course ID (optional)
  title?: string; // Title of the module (optional)
  content?: string; // Content of the module (optional)
  moduleVersion?: string; // Last version number of the module (optional)
  isActive?: string; // The module is active (Yes, No) (optional)
  difficultyLevel?: string; // Difficulty level (easy, medium, hard) (optional)
  resources?: string[]; // Array of URLs to additional resources (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}