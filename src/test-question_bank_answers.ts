import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { QuestionBankAnswersService } from 'src/question-bank-answers/question-bank-answers.service';
import { CreateQuestionBankAnswerDto } from 'src/question-bank-answers/DTOs/CreateQuestionBankAnsDto';
import { UpdateQuestionBankAnswerDto } from 'src/question-bank-answers/DTOs/UpdateQuestionBankAnsDto';

async function AddAnswerToQuestion(questionBankId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionBankAnswersService = app.get(QuestionBankAnswersService);

  // Example: Test the create method
  const createAnswerDto: CreateQuestionBankAnswerDto = {
    answerId: 'answer001',
    questionBankId,
    answerContent: 'This is the correct answer.',
    isCorrect: 'Yes',
    createdBy: 'user123',
    createdAt: new Date(),
  };

  const result = await questionBankAnswersService.create(questionBankId, createAnswerDto);
  console.log('Answer added successfully:', result);

  await app.close();
}

async function GetAnswersByQuestionBankId(questionBankId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionBankAnswersService = app.get(QuestionBankAnswersService);

  // Call the function to get all answers for a question
  await testGetAnswersByQuestionBankId(questionBankAnswersService, questionBankId);

  await app.close();
}

// Function to get all answers for a specific question
async function testGetAnswersByQuestionBankId(
  questionBankAnswersService: QuestionBankAnswersService,
  questionBankId: string,
) {
  try {
    console.log(`Fetching answers for question bank ID: ${questionBankId}`);
    const answers = await questionBankAnswersService.findAllByQuestionBankId(questionBankId);
    console.log('Answers fetched successfully:', answers);
  } catch (error) {
    console.error('Error fetching answers:', error.message);
  }
}

async function GetAnswerById(answerId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionBankAnswersService = app.get(QuestionBankAnswersService);

  // Call the function to get a specific answer by ID
  await testGetAnswerById(questionBankAnswersService, answerId);

  await app.close();
}

// Function to get details of a specific answer by ID
async function testGetAnswerById(
  questionBankAnswersService: QuestionBankAnswersService,
  answerId: string,
) {
  try {
    console.log(`Fetching answer with ID: ${answerId}`);
    const answer = await questionBankAnswersService.findById(answerId);
    console.log('Answer fetched successfully:', answer);
  } catch (error) {
    console.error(`Error fetching answer with ID ${answerId}:`, error.message);
  }
}

async function UpdateAnswer(answerId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionBankAnswersService = app.get(QuestionBankAnswersService);

  // Example answer update data
  const updateAnswerDto: UpdateQuestionBankAnswerDto = {
    answerContent: 'Updated answer content.',
    isCorrect: 'No',
    updatedBy: 'user123',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdateAnswer(questionBankAnswersService, answerId, updateAnswerDto);

  await app.close();
}

// Function to update an answer by ID
async function testUpdateAnswer(
  questionBankAnswersService: QuestionBankAnswersService,
  answerId: string,
  updateAnswerDto: UpdateQuestionBankAnswerDto,
) {
  try {
    console.log(`Attempting to update answer with ID: ${answerId}`);
    const updatedAnswer = await questionBankAnswersService.update(answerId, updateAnswerDto);
    console.log('Answer updated successfully:', updatedAnswer);
  } catch (error) {
    console.error('Error updating answer:', error.message);
  }
}

async function DeleteAnswer(answerId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionBankAnswersService = app.get(QuestionBankAnswersService);

  // Call the delete function
  await testDeleteAnswer(questionBankAnswersService, answerId);

  await app.close();
}

// Function to delete an answer by ID
async function testDeleteAnswer(
  questionBankAnswersService: QuestionBankAnswersService,
  answerId: string,
) {
  try {
    console.log(`Attempting to delete answer with ID: ${answerId}`);
    await questionBankAnswersService.delete(answerId);
    console.log('Answer deleted successfully.');
  } catch (error) {
    console.error('Error deleting answer:', error.message);
  }
}

// Example function calls
// AddAnswerToQuestion('questionBank001');
// GetAnswersByQuestionBankId('questionBank001');
// GetAnswerById('answer001');
// UpdateAnswer('answer001');
// DeleteAnswer('answer001');
