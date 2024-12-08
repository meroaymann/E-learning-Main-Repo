import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { AuthService } from 'src/auth/auth.service';
import { RegisterRequestDto } from 'src/auth/DTOs/RegisterRequestdDto';
import { SignInDto } from 'src/auth/DTOs/SignInDto';

async function RegisterUser() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authService = app.get(AuthService);

  // Example: Test the register method
  const registerRequestDto: RegisterRequestDto = {
    email: 'testuser@example.com',
    name: 'Test User',
    age: 25,
    password: 'TestPassword123',
    role: 'student',
    createdAt: new Date(),
  };

  try {
    const result = await authService.register(registerRequestDto);
    console.log('User registered successfully:', result);
  } catch (error) {
    console.error('Error during user registration:', error.message);
  }

  await app.close();
}

async function SignInUser() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authService = app.get(AuthService);

  // Example: Test the signIn method
  const signInDto: SignInDto = {
    email: 'testuser@example.com',
    password: 'TestPassword123',
  };

  try {
    const result = await authService.signIn(signInDto.email, signInDto.password);
    console.log('User signed in successfully:', {
      accessToken: result.access_token,
      user: result.payload,
    });
  } catch (error) {
    console.error('Error during user login:', error.message);
  }

  await app.close();
}

// Example function calls
// RegisterUser();
// SignInUser();
