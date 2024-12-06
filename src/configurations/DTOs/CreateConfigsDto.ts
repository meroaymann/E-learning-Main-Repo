export class CreateConfigurationDto {
  configId: string; // Unique identifier for the configuration
  settings: Record<string, any>; // Key-value pairs for application settings
  createdBy: string; // User who created the configuration
  createdAt: Date; // Timestamp of configuration creation
  updatedBy: string; // User who last updated the configuration
  updatedAt: Date; // Timestamp of the last update
}