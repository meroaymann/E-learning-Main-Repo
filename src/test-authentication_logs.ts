import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationLogService } from './authentication-logs/authentication-logs.service';
import { CreateAuthenticationLogDto } from './authentication-logs/DTOs/CreateAuthLogDto';

async function LogAuthenticationEvent() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authenticationLogService = app.get(AuthenticationLogService);

  // Example: Test the create method
  const createAuthenticationLogDto: CreateAuthenticationLogDto = {
    logId: 'log001',
    userId: 'user123',
    event: 'Password Authentication',
    timestamp: new Date(),
    status: 'Success',
    failureReason: undefined, // No failure in this example
  };

  const result = await authenticationLogService.create(createAuthenticationLogDto);
  console.log('Authentication log created successfully:', result);

  await app.close();
}

async function FetchAllAuthenticationLogs() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authenticationLogService = app.get(AuthenticationLogService);

  // Call the function to get all authentication logs
  await testGetAll(authenticationLogService);

  await app.close();
}

// Function to get all authentication logs
async function testGetAll(authenticationLogService: AuthenticationLogService) {
  try {
    console.log('Fetching all authentication logs...');
    const logs = await authenticationLogService.findAll();
    console.log('Authentication logs fetched successfully:', logs);
  } catch (error) {
    console.error('Error fetching authentication logs:', error.message);
  }
}

// Example function calls
// Uncomment one of the following lines to test the corresponding functionality:

// LogAuthenticationEvent();
FetchAllAuthenticationLogs();
