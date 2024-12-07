import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { QuizService } from 'src/quizzes/quizzes.service';
import { CreateQuizDto } from 'src/quizzes/DTOs/CreateQuizDto';
import { UpdateQuizDto } from 'src/quizzes/DTOs/UpdateQuizDto';

async function CreateQuiz(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizService = app.get(QuizService);

  // Example: Test the create method
  const createQuizDto: CreateQuizDto = {
    quizId: 'quiz001',
    quizTitle: 'Sample Quiz',
    moduleId,
    maxQuestions: 10,
    isActive: 'Yes',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await quizService.create(moduleId, createQuizDto);
  console.log('Quiz created successfully:', result);

  await app.close();
}

async function GetAllQuizzesByModuleId(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizService = app.get(QuizService);

  // Call the function to get all quizzes for a module
  await testGetAllByModuleId(quizService, moduleId);

  await app.close();
}

// Function to get all quizzes for a specific module
async function testGetAllByModuleId(quizService: QuizService, moduleId: string) {
  try {
    console.log(`Fetching quizzes for module ID: ${moduleId}`);
    const quizzes = await quizService.findAllByModuleId(moduleId);
    console.log('Quizzes fetched successfully:', quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error.message);
  }
}

async function GetQuizById(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizService = app.get(QuizService);

  // Call the function to get a specific quiz
  await testGetById(quizService, quizId);

  await app.close();
}

// Function to get details of a specific quiz
async function testGetById(quizService: QuizService, quizId: string) {
  try {
    console.log(`Fetching quiz with ID: ${quizId}`);
    const quiz = await quizService.findById(quizId);
    console.log('Quiz fetched successfully:', quiz);
  } catch (error) {
    console.error(`Error fetching quiz with ID ${quizId}:`, error.message);
  }
}

async function UpdateQuiz(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizService = app.get(QuizService);

  // Example quizId and update data
  const updateQuizDto: UpdateQuizDto = {
    quizTitle: 'Updated Quiz Title',
    maxQuestions: 15,
    isActive: 'No',
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(quizService, quizId, updateQuizDto);

  await app.close();
}

// Function to update a quiz
async function testUpdate(quizService: QuizService, quizId: string, updateQuizDto: UpdateQuizDto) {
  try {
    console.log(`Attempting to update quiz with ID: ${quizId}`);
    const updatedQuiz = await quizService.update(quizId, updateQuizDto);
    console.log('Quiz updated successfully:', updatedQuiz);
  } catch (error) {
    console.error('Error updating quiz:', error.message);
  }
}

async function DeleteQuiz(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizService = app.get(QuizService);

  // Call the delete function
  await testDelete(quizService, quizId);

  await app.close();
}

// Function to delete a quiz
async function testDelete(quizService: QuizService, quizId: string) {
  try {
    console.log(`Attempting to delete quiz with ID: ${quizId}`);
    await quizService.delete(quizId);
    console.log('Quiz deleted successfully.');
  } catch (error) {
    console.error('Error deleting quiz:', error.message);
  }
}

// Example function calls
// CreateQuiz('module789');
// GetAllQuizzesByModuleId('module789');
// GetQuizById('quiz001');
// UpdateQuiz('quiz001');
// DeleteQuiz('quiz001');
