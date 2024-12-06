export class CreateQuizQuestionDto {
    quizQuestionId: string; // Unique identifier for the quiz question
    courseId: string; // Associated course ID
    moduleId: string; // Associated module ID
    quizId: string; // Associated quiz ID
    questionBankId: string; // Associated question bank ID
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  