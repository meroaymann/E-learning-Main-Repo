export class CreateQuizDto {
  quizId: string; // Unique identifier for the quiz
  quizTitle: string; // Title of the quiz
  moduleId: string; // Associated module ID
  maxQuestions: number; // Max number of questions
  isActive: string; // The quiz is active (Yes, No)
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}