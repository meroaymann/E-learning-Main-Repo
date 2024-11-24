export class UpdateConfigurationDTO {
    settings?: Record<string, any>; // Optional for partial updates
    updatedBy?: string;
    updatedAt?: Date;
  }