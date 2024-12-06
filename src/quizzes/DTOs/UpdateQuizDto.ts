export class UpdateQuizDto {
  quizTitle?: string; // Title of the quiz (optional)
  moduleId?: string; // Associated module ID (optional)
  maxQuestions?: number; // Max number of questions (optional)
  isActive?: string; // The quiz is active (Yes, No) (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}