export class UpdateResponseDto {
  userId?: string; // User who submitted the response (optional)
  courseId?: string; // Associated course ID (optional)
  moduleId?: string; // Associated module ID (optional)
  quizId?: string; // Associated quiz ID (optional)
  questionBankId?: string; // Associated question ID (optional)
  selectedAnswer?: string; // Associated answer ID (optional)
  correctAnswer?: string; // Correct answer ID (optional)
  totalScore?: number; // The original total score of the quiz questions (optional)
  totalReceived?: number; // Total score received for the quiz (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}