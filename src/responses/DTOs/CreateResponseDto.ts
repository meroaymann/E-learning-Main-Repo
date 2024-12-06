export class CreateResponseDto {
  responseId: string; // Unique identifier for the response
  userId: string; // User who submitted the response
  courseId: string; // Associated course ID
  moduleId: string; // Associated module ID
  quizId: string; // Associated quiz ID
  questionBankId: string; // Associated question ID
  selectedAnswer: string; // Associated answer ID
  correctAnswer: string; // Correct answer ID
  totalScore: number; // The original total score of the quiz questions
  totalReceived: number; // Total score received for the quiz
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}