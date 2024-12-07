import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QuizQuestionsService } from './quiz-questions/quiz-questions.service';
import { CreateQuizQuestionDto } from './quiz-questions/DTOs/CreateQuizQuestionsDto'; 
import { UpdateQuizQuestionDto } from './quiz-questions/DTOs/UpdateQuizQuestionsDto';

// Function to register (create) a quiz question
async function RegisterQuizQuestion() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizQuestionsService = app.get(QuizQuestionsService);

  const createQuizQuestionDto: CreateQuizQuestionDto = {
    quizQuestionId: 'QZ123',
    courseId: 'C001',
    moduleId: 'M002',
    quizId: 'QZ001',
    questionBankId: 'QB001',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await quizQuestionsService.linkQuestionsToQuiz(
    createQuizQuestionDto.quizId,
    [createQuizQuestionDto]
  );
  console.log('Quiz Question Created:', result);

  await app.close();
}

// Function to delete a quiz question
async function DeleteQuizQuestion(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizQuestionsService = app.get(QuizQuestionsService);

  try {
    console.log(`Deleting quiz question with ID: ${questionId}`);
    await quizQuestionsService.unlinkQuestion(questionId);
    console.log('Quiz question deleted successfully.');
  } catch (error) {
    console.error('Error deleting quiz question:', error.message);
  }

  await app.close();
}

// Function to update a quiz question
async function UpdateQuizQuestion(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizQuestionsService = app.get(QuizQuestionsService);

  const updateQuizQuestionDto: UpdateQuizQuestionDto = {
    courseId: 'C002',
    updatedBy: 'Editor',
    updatedAt: new Date(),
  };

  try {
    console.log(`Updating quiz question with ID: ${questionId}`);
    const result = await quizQuestionsService.linkQuestionsToQuiz(
      questionId,
      [updateQuizQuestionDto as any] // Casting for simplicity
    );
    console.log('Quiz question updated successfully:', result);
  } catch (error) {
    console.error('Error updating quiz question:', error.message);
  }

  await app.close();
}

// Function to fetch all quiz questions linked to a quiz
async function GetAllQuizQuestions(quizId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizQuestionsService = app.get(QuizQuestionsService);

  try {
    console.log(`Fetching quiz questions for quiz ID: ${quizId}`);
    const questions = await quizQuestionsService.getQuestionsByQuizId(quizId);
    console.log('Fetched Quiz Questions:', questions);
  } catch (error) {
    console.error('Error fetching quiz questions:', error.message);
  }

  await app.close();
}

// Function to fetch a single quiz question by ID
async function GetSingleQuizQuestion(questionId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quizQuestionsService = app.get(QuizQuestionsService);

  try {
    console.log(`Fetching quiz question with ID: ${questionId}`);
    const question = await quizQuestionsService.getQuestionsByQuizId(questionId);
    console.log('Fetched Quiz Question:', question);
  } catch (error) {
    console.error('Error fetching quiz question:', error.message);
  }

  await app.close();
}

// Example usage
// RegisterQuizQuestion();
// DeleteQuizQuestion('QZ123');
// UpdateQuizQuestion('QZ123');
// GetAllQuizQuestions('QZ001');
// GetSingleQuizQuestion('QZ123');
