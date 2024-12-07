import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModuleService } from './modules/modules.service';
import { CreateModulesDto } from './modules/DTOs/CreateModuleDto';
import { UpdateModulesDto } from './modules/DTOs/UpdateModuleDto';

async function AddModuleToCourse(courseId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const moduleService = app.get(ModuleService);

  // Example: Test the create method
  const createModuleDto: CreateModulesDto = {
    moduleId: 'module001',
    courseId,
    title: 'Introduction to Programming',
    content: 'Module content for Introduction to Programming',
    moduleVersion: '1.0',
    isActive: 'Yes',
    difficultyLevel: 'easy',
    resources: ['https://example.com/resource1', 'https://example.com/resource2'],
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await moduleService.create(courseId, createModuleDto);
  console.log('Module added successfully:', result);

  await app.close();
}

async function GetModulesByCourse(courseId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const moduleService = app.get(ModuleService);

  // Call the function to get all modules for a course
  await testGetModulesByCourse(moduleService, courseId);

  await app.close();
}

// Function to get all modules for a specific course
async function testGetModulesByCourse(moduleService: ModuleService, courseId: string) {
  try {
    console.log(`Fetching modules for course ID: ${courseId}`);
    const modules = await moduleService.findAllByCourse(courseId);
    console.log('Modules fetched successfully:', modules);
  } catch (error) {
    console.error('Error fetching modules:', error.message);
  }
}

async function GetModuleById(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const moduleService = app.get(ModuleService);

  // Call the function to get a specific module by ID
  await testGetModuleById(moduleService, moduleId);

  await app.close();
}

// Function to get details of a specific module by ID
async function testGetModuleById(moduleService: ModuleService, moduleId: string) {
  try {
    console.log(`Fetching module with ID: ${moduleId}`);
    const module = await moduleService.findById(moduleId);
    console.log('Module fetched successfully:', module);
  } catch (error) {
    console.error(`Error fetching module with ID ${moduleId}:`, error.message);
  }
}

async function UpdateModule(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const moduleService = app.get(ModuleService);

  // Example module update data
  const updateModulesDto: UpdateModulesDto = {
    title: 'Advanced Programming Concepts',
    content: 'Updated content for Advanced Programming Concepts',
    moduleVersion: '2.0',
    isActive: 'Yes',
    difficultyLevel: 'medium',
    resources: ['https://example.com/new-resource'],
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdateModule(moduleService, moduleId, updateModulesDto);

  await app.close();
}

// Function to update a module by ID
async function testUpdateModule(moduleService: ModuleService, moduleId: string, updateModulesDto: UpdateModulesDto) {
  try {
    console.log(`Attempting to update module with ID: ${moduleId}`);
    const updatedModule = await moduleService.update(moduleId, updateModulesDto);
    console.log('Module updated successfully:', updatedModule);
  } catch (error) {
    console.error('Error updating module:', error.message);
  }
}

async function DeleteOrDeactivateModule(moduleId: string, deactivate = false) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const moduleService = app.get(ModuleService);

  // Call the delete or deactivate function
  await testDeleteOrDeactivateModule(moduleService, moduleId, deactivate);

  await app.close();
}

// Function to delete or deactivate a module
async function testDeleteOrDeactivateModule(
  moduleService: ModuleService,
  moduleId: string,
  deactivate: boolean,
) {
  try {
    const action = deactivate ? 'deactivate' : 'delete';
    console.log(`Attempting to ${action} module with ID: ${moduleId}`);
    await moduleService.deleteOrDeactivate(moduleId, deactivate);
    console.log(`Module ${action}d successfully.`);
  } catch (error) {
    console.error(`Error ${deactivate ? 'deactivating' : 'deleting'} module:`, error.message);
  }
}

// Example function calls
// AddModuleToCourse('course123');
// GetModulesByCourse('course123');
// GetModuleById('module001');
// UpdateModule('module001');
// DeleteOrDeactivateModule('module001', true); // To deactivate
// DeleteOrDeactivateModule('module001', false); // To delete