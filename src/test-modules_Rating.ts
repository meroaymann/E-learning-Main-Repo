import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModulesRatingService } from './modules-rating/modules-rating.service';
import { CreateModuleRatingDto } from './modules-rating/DTOs/CreateModulesRatingDto';

async function AddModuleRating(moduleId: string, courseId: string, userId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const modulesRatingService = app.get(ModulesRatingService);

  // Example: Test the addRating method
  const rateScore = 4; // Example score
  const createModuleRatingDto: CreateModuleRatingDto = {
    moduleRateId: `${moduleId}-${userId}`,
    moduleId,
    courseId,
    userId,
    rateScore,
    createdBy: userId,
    createdAt: new Date(),
  };

  const result = await modulesRatingService.addRating(
    createModuleRatingDto.moduleId,
    createModuleRatingDto.courseId,
    createModuleRatingDto.userId,
    createModuleRatingDto.rateScore,
  );
  console.log('Rating added successfully:', result);

  await app.close();
}

async function GetModuleRatings(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const modulesRatingService = app.get(ModulesRatingService);

  // Call the function to get all ratings for a specific module
  await testGetModuleRatings(modulesRatingService, moduleId);

  await app.close();
}

// Function to get all ratings for a specific module
async function testGetModuleRatings(modulesRatingService: ModulesRatingService, moduleId: string) {
  try {
    console.log(`Fetching ratings for module ID: ${moduleId}`);
    const ratings = await modulesRatingService.getModuleRatings(moduleId);
    console.log('Module ratings fetched successfully:', ratings);
  } catch (error) {
    console.error('Error fetching module ratings:', error.message);
  }
}

async function GetAllModuleRatings() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const modulesRatingService = app.get(ModulesRatingService);

  // Call the function to get all module ratings
  await testGetAllModuleRatings(modulesRatingService);

  await app.close();
}

// Function to get all module ratings (Admin only)
async function testGetAllModuleRatings(modulesRatingService: ModulesRatingService) {
  try {
    console.log('Fetching all module ratings...');
    const allRatings = await modulesRatingService.getAllRatings();
    console.log('All module ratings fetched successfully:', allRatings);
  } catch (error) {
    console.error('Error fetching all module ratings:', error.message);
  }
}

// Example function calls
// AddModuleRating('module001', 'course123', 'user001');
// GetModuleRatings('module001');
// GetAllModuleRatings();
