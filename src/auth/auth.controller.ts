  import { Body, Controller, HttpStatus, Post, HttpException, Res } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { RegisterRequestDto } from './DTOs/RegisterRequestdDto';
  import { SignInDto } from './DTOs/SignInDto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('login')
    async signIn(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res) {
      try {
        const result = await this.authService.signIn(signInDto.email, signInDto.password);
  
        res.cookie('token', result.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600 * 1000,
        });
  
        return {
          statusCode: HttpStatus.OK,
          message: 'Login successful',
          user: result.payload,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'An error occurred during login',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post('register')
    async register(@Body() registerRequestDto: RegisterRequestDto) {
      try {
        const result = await this.authService.register(registerRequestDto);
        return {
          statusCode: HttpStatus.CREATED,
          message: 'User registered successfully',
          data: result,
        };
      } catch (error) {
        if (error.status === HttpStatus.CONFLICT) {
          throw new HttpException(
            {
              statusCode: HttpStatus.CONFLICT,
              message: 'Email already exists',
            },
            HttpStatus.CONFLICT,
          );
        }
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'An error occurred during registration',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }