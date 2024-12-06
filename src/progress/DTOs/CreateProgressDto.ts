export class CreateProgressDto {
  progressId: string; // Unique identifier for progress tracking
  userId: string; // Associated student user ID
  courseId: string; // Associated course ID
  courseSequence?: number; // Learning path sequence (optional)
  quizzesPercentage: number; // Percentage of quizzes completed
  quizzesCompleted: string; // All quizzes completed (Yes, No)
  modulesPercentage: number; // Percentage of modules completed
  modulesCompleted: string; // All modules completed (Yes, No)
  coursePercentage: number; // Percentage of course completed
  performanceRangeId?: string; // Associated performance_range ID (optional)
  courseCompleted: string; // All course completed (Yes, No)
  rateCourse?: number; // Student rating of the course (up to five stars) (optional)
  courseFeedback?: string; // Student feedback for the course (optional)
  rateInstructor?: number; // Student rating of the instructor (up to five stars) (optional)
  instructorFeedback?: string; // Student feedback for the instructor (optional)
  enrollDate: Date; // Student enroll date
  lastAccessed: Date; // Last time the course was accessed
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}