export class CreatePerformanceRangeDto {
    performanceRangeId: string; // Unique identifier for the performance range
    rangeName: string; // Below Average, Average, Above Average, Excellent
    minRange: number; // Minimum range
    maxRange: number; // Maximum range
    createdBy: string; // userId who created the record
    createdAt: Date; // Timestamp of record creation
  }  