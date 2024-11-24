export class CreateResponseDTO {
    id: string;
    userId: string;
    quizId: string;
    answers: Array<object>;
    score: number;
    submittedAt: Date;
  }