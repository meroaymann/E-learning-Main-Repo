export class CreateQuestionBankAnswerDto {
    answerId: string; // Unique identifier for the answer
    questionBankId: string; // Associated question bank ID
    answerContent: string; // The answer content
    isCorrect: string; // The answer is correct (Yes, No)
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  