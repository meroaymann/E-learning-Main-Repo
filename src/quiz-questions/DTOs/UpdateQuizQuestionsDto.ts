export class UpdateQuizQuestionDto {
    courseId?: string; // Associated course ID (optional)
    moduleId?: string; // Associated module ID (optional)
    quizId?: string; // Associated quiz ID (optional)
    questionBankId?: string; // Associated question bank ID (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  