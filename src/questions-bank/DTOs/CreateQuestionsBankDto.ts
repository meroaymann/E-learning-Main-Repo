export class CreateQuestionsBankDto {
    questionBankId: string; // Unique identifier for the question bank
    moduleId: string; // Associated module ID
    courseId: string; // Associated course ID
    questionTitle: string; // The question title
    questionType: string; // The question type (MCQ, TFQ)
    questionScore: number; // The question score
    isActive: string; // The question_bank is active (Yes, No)
    difficultyLevel: string; // Difficulty level (easy, medium, hard)
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  