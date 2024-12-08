import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { existsSync } from 'fs';

// Load environment variables if the .env file exists
const envPath = './.env';
if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log('Environment variables loaded from .env');
} else {
  console.error('.env file not found');
}

async function bootstrap() {
  try {
    // Log the PORT value from the environment
    console.log('PORT:', process.env.PORT);

    // Create the NestJS application
    const app = await NestFactory.create(AppModule);

    // Set the application port with a fallback to 3000
    const port = process.env.PORT || 3000;

    // Correct usage of template literals
    console.log(`Application running on port: ${port}`);

    // Start listening on the specified port
    await app.listen(port);
  } catch (error) {
    console.error('Error during application bootstrap:', error);
  }
}
bootstrap();