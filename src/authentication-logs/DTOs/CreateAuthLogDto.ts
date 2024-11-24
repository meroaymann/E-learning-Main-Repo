export class CreateAuthenticationLogDTO {
    id: string;
    userId: string;
    event: string;
    timestamp: Date;
    status: string; // e.g., "Success", "Failure"
  }