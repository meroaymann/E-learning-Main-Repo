import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UsersSchema } from '../users/models/users.schema';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    // Register the Users collection for dependency injection
    MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]),
    // Configure JWT module globally with secret and expiration from .env
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController], // Registers the AuthController
  providers: [AuthService], // Registers the AuthService
})
export class AuthModule {}