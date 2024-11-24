export class CreateConfigurationDTO {
    id: string;
    settings: Record<string, any>; // Flexible key-value pairs
    updatedBy: string; // User who last updated the configuration
    updatedAt: Date;
  }