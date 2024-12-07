import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthGuard, AuthorizationGuard, Reflector],
  exports: [AuthGuard, AuthorizationGuard],
})
export class AuthModule {}
