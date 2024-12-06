export class UpdateQuestionsBankDto {
    moduleId?: string; // Associated module ID (optional)
    courseId?: string; // Associated course ID (optional)
    questionTitle?: string; // The question title (optional)
    questionType?: string; // The question type (MCQ, TFQ) (optional)
    questionScore?: number; // The question score (optional)
    isActive?: string; // The question_bank is active (Yes, No) (optional)
    difficultyLevel?: string; // Difficulty level (easy, medium, hard) (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  