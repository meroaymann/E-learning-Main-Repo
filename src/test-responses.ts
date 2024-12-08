import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ResponsesService } from 'src/responses/responses.service';
import { CreateResponseDto } from 'src/responses/DTOs/CreateResponseDto';

async function SubmitQuizResponse(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Example: Test the submitResponse method
  const createResponseDto: CreateResponseDto = {
    responseId: 'response001',
    userId: 'user123',
    courseId: 'course001',
    moduleId: 'module001',
    quizId,
    questionBankId: 'question001',
    selectedAnswer: 'A',
    correctAnswer: 'A',
    totalScore: 10,
    totalReceived: 10,
    createdBy: 'user123',
    createdAt: new Date(),
  };

  try {
    const result = await responsesService.submitResponse(createResponseDto);
    console.log('Quiz response submitted successfully:', result);
  } catch (error) {
    console.error('Error during response submission:', error.message);
  }

  await app.close();
}

async function GetResponsesForQuiz(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const responsesService = app.get(ResponsesService);

  // Call the function to get all responses for a quiz
  await testGetResponsesForQuiz(responsesService, quizId);

  await app.close();
}

// Function to get all responses for a specific quiz
async function testGetResponsesForQuiz(
  responsesService: ResponsesService,
  quizId: string,
) {
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

  // Call the function to get a specific response by ID
  await testGetResponseById(responsesService, responseId);

  await app.close();
}

// Function to get details of a specific response by ID
async function testGetResponseById(
  responsesService: ResponsesService,
  responseId: string,
) {
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

// Function to delete a response by ID
async function testDeleteResponse(
  responsesService: ResponsesService,
  responseId: string,
) {
  try {
    console.log(`Attempting to delete response with ID: ${responseId}`);
    await responsesService.deleteResponse(responseId);
    console.log('Response deleted successfully.');
  } catch (error) {
    console.error('Error deleting response:', error.message);
  }
}

// Example function calls
// SubmitQuizResponse('quiz001');
// GetResponsesForQuiz('quiz001');
// GetResponseById('response001');
// DeleteResponse('response001');
