export class UpdateQuestionBankAnswerDto {
    questionBankId?: string; // Associated question bank ID (optional)
    answerContent?: string; // The answer content (optional)
    isCorrect?: string; // The answer is correct (Yes, No) (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  