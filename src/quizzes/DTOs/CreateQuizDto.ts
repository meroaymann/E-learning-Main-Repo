export class CreateQuizDTO {
    id: string;
    moduleId: string;
    questions: Array<object>;
    createdAt: Date;
  }