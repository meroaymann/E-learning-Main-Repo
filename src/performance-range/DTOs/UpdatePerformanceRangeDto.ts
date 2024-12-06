export class UpdatePerformanceRangeDto {
    rangeName?: string; // Below Average, Average, Above Average, Excellent (optional)
    minRange?: number; // Minimum range (optional)
    maxRange?: number; // Maximum range (optional)
    updatedBy?: string; // userId who updated the record (optional)
    updatedAt?: Date; // Timestamp of record update (optional)
  }  