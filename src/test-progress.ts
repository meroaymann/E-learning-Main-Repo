import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ProgressService } from 'src/progress/progress.service';
import { CreateProgressDto } from 'src/progress/DTOs/CreateProgressDto';
import { UpdateProgressDto } from 'src/progress/DTOs/UpdateProgressDto';

async function FetchUserProgress(userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const progressService = app.get(ProgressService);

  // Call the function to fetch progress for a specific user
  await testFetchUserProgress(progressService, userId);

  await app.close();
}

// Function to fetch progress for a specific user
async function testFetchUserProgress(progressService: ProgressService, userId: string) {
  try {
    console.log(`Fetching progress for user ID: ${userId}`);
    const progress = await progressService.fetchUserProgress(userId);
    console.log('User progress fetched successfully:', progress);
  } catch (error) {
    console.error('Error fetching user progress:', error.message);
  }
}

async function FetchCourseProgress(courseId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const progressService = app.get(ProgressService);

  // Call the function to fetch progress for all users in a course
  await testFetchCourseProgress(progressService, courseId);

  await app.close();
}

// Function to fetch progress for all users in a course
async function testFetchCourseProgress(progressService: ProgressService, courseId: string) {
  try {
    console.log(`Fetching progress for course ID: ${courseId}`);
    const progress = await progressService.fetchCourseProgress(courseId);
    console.log('Course progress fetched successfully:', progress);
  } catch (error) {
    console.error('Error fetching course progress:', error.message);
  }
}

async function AddOrUpdateProgress() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const progressService = app.get(ProgressService);

  // Example: Test the addOrUpdateProgress method
  const progressDto: CreateProgressDto = {
    progressId: 'progress001',
    userId: 'user123',
    courseId: 'course456',
    courseSequence: 1,
    quizzesPercentage: 80,
    quizzesCompleted: 'No',
    modulesPercentage: 75,
    modulesCompleted: 'No',
    coursePercentage: 50,
    courseCompleted: 'No',
    rateCourse: 4,
    courseFeedback: 'Great course!',
    rateInstructor: 5,
    instructorFeedback: 'Excellent teaching.',
    enrollDate: new Date('2023-01-01'),
    lastAccessed: new Date(),
    createdBy: 'user123',
    createdAt: new Date(),
  };

  const result = await progressService.addOrUpdateProgress(progressDto);
  console.log('Progress added/updated successfully:', result);

  await app.close();
}

// Example function calls
// FetchUserProgress('user123');
// FetchCourseProgress('course456');
// AddOrUpdateProgress();
