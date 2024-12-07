import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { QuestionsBankService } from 'src/questions-bank/questions-bank.service';
import { CreateQuestionsBankDto } from 'src/questions-bank/DTOs/CreateQuestionsBankDto';
import { UpdateQuestionsBankDto } from 'src/questions-bank/DTOs/UpdateQuestionsBankDto';

async function AddQuestionToBank(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsBankService = app.get(QuestionsBankService);

  // Example: Test the create method
  const createQuestionDto: CreateQuestionsBankDto = {
    questionBankId: 'question001',
    moduleId,
    courseId: 'course001',
    questionTitle: 'What is TypeScript?',
    questionType: 'MCQ',
    questionScore: 10,
    isActive: 'Yes',
    difficultyLevel: 'medium',
    createdBy: 'admin',
    createdAt: new Date(),
  };

  const result = await questionsBankService.create(moduleId, createQuestionDto);
  console.log('Question added to bank successfully:', result);

  await app.close();
}

async function GetQuestionsByModuleId(moduleId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsBankService = app.get(QuestionsBankService);

  // Call the function to get all questions for a module
  await testGetQuestionsByModuleId(questionsBankService, moduleId);

  await app.close();
}

// Function to get all questions for a specific module
async function testGetQuestionsByModuleId(
  questionsBankService: QuestionsBankService,
  moduleId: string,
) {
  try {
    console.log(`Fetching questions for module ID: ${moduleId}`);
    const questions = await questionsBankService.findAllByModuleId(moduleId);
    console.log('Questions fetched successfully:', questions);
  } catch (error) {
    console.error('Error fetching questions:', error.message);
  }
}

async function GetQuestionById(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsBankService = app.get(QuestionsBankService);

  // Call the function to get a specific question by ID
  await testGetQuestionById(questionsBankService, questionId);

  await app.close();
}

// Function to get details of a specific question by ID
async function testGetQuestionById(
  questionsBankService: QuestionsBankService,
  questionId: string,
) {
  try {
    console.log(`Fetching question with ID: ${questionId}`);
    const question = await questionsBankService.findById(questionId);
    console.log('Question fetched successfully:', question);
  } catch (error) {
    console.error(`Error fetching question with ID ${questionId}:`, error.message);
  }
}

async function UpdateQuestion(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsBankService = app.get(QuestionsBankService);

  // Example question update data
  const updateQuestionDto: UpdateQuestionsBankDto = {
    questionTitle: 'What is JavaScript?',
    questionType: 'TFQ',
    questionScore: 5,
    difficultyLevel: 'easy',
    updatedBy: 'admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdateQuestion(questionsBankService, questionId, updateQuestionDto);

  await app.close();
}

// Function to update a question by ID
async function testUpdateQuestion(
  questionsBankService: QuestionsBankService,
  questionId: string,
  updateQuestionDto: UpdateQuestionsBankDto,
) {
  try {
    console.log(`Attempting to update question with ID: ${questionId}`);
    const updatedQuestion = await questionsBankService.update(questionId, updateQuestionDto);
    console.log('Question updated successfully:', updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error.message);
  }
}

async function DeleteQuestion(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsBankService = app.get(QuestionsBankService);

  // Call the delete function
  await testDeleteQuestion(questionsBankService, questionId);

  await app.close();
}

// Function to delete a question by ID
async function testDeleteQuestion(
  questionsBankService: QuestionsBankService,
  questionId: string,
) {
  try {
    console.log(`Attempting to delete question with ID: ${questionId}`);
    await questionsBankService.delete(questionId);
    console.log('Question deleted successfully.');
  } catch (error) {
    console.error('Error deleting question:', error.message);
  }
}

// Example function calls
// AddQuestionToBank('module001');
// GetQuestionsByModuleId('module001');
// GetQuestionById('question001');
// UpdateQuestion('question001');
// DeleteQuestion('question001');
