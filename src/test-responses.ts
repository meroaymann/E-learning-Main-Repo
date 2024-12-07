import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponsesService } from './responses/responses.service';
import { CreateResponseDto } from './responses/DTOs/CreateResponseDto';

async function SubmitResponse() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Example: Test the submitResponse method
  const createResponseDto: CreateResponseDto = {
    responseId: 'response001',
    userId: 'user123',
    courseId: 'course456',
    moduleId: 'module789',
    quizId: 'quiz321',
    questionBankId: 'question654',
    selectedAnswer: 'answerA',
    correctAnswer: 'answerB',
    totalScore: 100,
    totalReceived: 90,
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await responsesService.submitResponse(createResponseDto);
  console.log('Response submitted successfully:', result);

  await app.close();
}

async function GetResponsesByQuizId(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Call the function to get all responses for a quiz
  await testGetResponsesByQuizId(responsesService, quizId);

  await app.close();
}

// Function to get all responses for a specific quiz
async function testGetResponsesByQuizId(responsesService: ResponsesService, quizId: string) {
  try {
    console.log(`Fetching responses for quiz ID: ${quizId}`);
    const responses = await responsesService.getResponsesByQuizId(quizId);
    console.log('Responses fetched successfully:', responses);
  } catch (error) {
    console.error('Error fetching responses:', error.message);
  }
}

async function GetResponseById(responseId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Call the function to get a specific response
  await testGetResponseById(responsesService, responseId);

  await app.close();
}

// Function to get details of a specific response
async function testGetResponseById(responsesService: ResponsesService, responseId: string) {
  try {
    console.log(`Fetching response with ID: ${responseId}`);
    const response = await responsesService.getResponseById(responseId);
    console.log('Response fetched successfully:', response);
  } catch (error) {
    console.error(`Error fetching response with ID ${responseId}:`, error.message);
  }
}

async function DeleteResponse(responseId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Call the delete function
  await testDeleteResponse(responsesService, responseId);

  await app.close();
}

// Function to delete a quiz response
async function testDeleteResponse(responsesService: ResponsesService, responseId: string) {
  try {
    console.log(`Attempting to delete response with ID: ${responseId}`);
    await responsesService.deleteResponse(responseId);
    console.log('Response deleted successfully.');
  } catch (error) {
    console.error('Error deleting response:', error.message);
  }
}

// Example function calls
//SubmitResponse();
// GetResponsesByQuizId('quiz321');
// GetResponseById('response001');
DeleteResponse('response001');
