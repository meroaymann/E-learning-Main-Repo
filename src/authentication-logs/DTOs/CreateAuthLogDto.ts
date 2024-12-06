export class CreateAuthenticationLogDto {
  logId: string; // Unique identifier for the log
  userId: string; // User who authenticated
  event: string; // Event description (e.g., "Biometric Authentication", "Text password")
  timestamp: Date; // Timestamp of the event
  status: string; // Status of authentication (e.g., "Success", "Failure")
  failureReason?: string; // Reason for failure (e.g., "Wrong password", "Wrong userId") (optional)
}