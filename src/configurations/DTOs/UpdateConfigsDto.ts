export class UpdateConfigurationDto {
  settings?: Record<string, any>; // Key-value pairs for application settings (optional)
  updatedBy?: string; // User who last updated the configuration (optional)
  updatedAt?: Date; // Timestamp of the last update (optional)
}