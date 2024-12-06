export class UpdateAuthenticationLogDto {
  event?: string; // Event description (e.g., "Biometric Authentication", "Text password") (optional)
  timestamp?: Date; // Timestamp of the event (optional)
  status?: string; // Status of authentication (e.g., "Success", "Failure") (optional)
  failureReason?: string; // Reason for failure (e.g., "Wrong password", "Wrong userId") (optional)
}