import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PerformanceRangeService } from './performance-range/performance-range.service';
import { CreatePerformanceRangeDto } from './performance-range/DTOs/CreatePerformanceRangeDto';
import { UpdatePerformanceRangeDto } from './performance-range/DTOs/UpdatePerformanceRangeDto';

async function RegisterPerformanceRange() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const performanceRangeService = app.get(PerformanceRangeService);

  // Example: Test the create method
  const createPerformanceRangeDto: CreatePerformanceRangeDto = {
    performanceRangeId: 'range001',
    rangeName: 'Above Average',
    minRange: 70,
    maxRange: 89,
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await performanceRangeService.create(createPerformanceRangeDto);
  console.log('Performance Range created successfully:', result);

  await app.close();
}

async function DeletePerformanceRange(id: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const performanceRangeService = appContext.get(PerformanceRangeService);

  // Call the delete function
  await testDelete(performanceRangeService, id);

  await appContext.close();
}

// Function to delete a performance range
async function testDelete(performanceRangeService: PerformanceRangeService, id: string) {
  try {
    console.log(`Attempting to delete performance range with ID: ${id}`);
    await performanceRangeService.delete(id);
    console.log('Performance Range deleted successfully.');
  } catch (error) {
    console.error('Error deleting performance range:', error.message);
  }
}

async function UpdatePerformanceRange(id: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const performanceRangeService = appContext.get(PerformanceRangeService);

  // Example id and update data
  const updateData: UpdatePerformanceRangeDto = {
    rangeName: 'Excellent',
    minRange: 90,
    maxRange: 100,
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(performanceRangeService, id, updateData);

  await appContext.close();
}

// Function to update a performance range
async function testUpdate(
  performanceRangeService: PerformanceRangeService,
  id: string,
  updateData: UpdatePerformanceRangeDto,
) {
  try {
    console.log(`Attempting to update performance range with ID: ${id}`);
    const updatedRange = await performanceRangeService.update(id, updateData);
    console.log('Performance Range updated successfully:', updatedRange);
  } catch (error) {
    console.error('Error updating performance range:', error.message);
  }
}

async function GetAllPerformanceRanges() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const performanceRangeService = appContext.get(PerformanceRangeService);

  // Call the function to get all performance ranges
  await testGetAll(performanceRangeService);

  await appContext.close();
}

// Function to get all performance ranges
async function testGetAll(performanceRangeService: PerformanceRangeService) {
  try {
    console.log('Fetching all performance ranges...');
    const ranges = await performanceRangeService.findAll();
    console.log('Performance Ranges fetched successfully:', ranges);
  } catch (error) {
    console.error('Error fetching performance ranges:', error.message);
  }
}

// Example function calls
// RegisterPerformanceRange();
// DeletePerformanceRange('range001');
// UpdatePerformanceRange('range001');
// GetAllPerformanceRanges();