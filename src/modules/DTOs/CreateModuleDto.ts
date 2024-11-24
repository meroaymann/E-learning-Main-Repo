export class CreateModuleDTO {
    id: string;
    courseId: string;
    title: string;
    content: string;
    resources?: string[]; // Optional array of URLs
    createdAt: Date;
  }