import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/authentication.guard';
import { AuthorizationGuard } from '../auth/guards/authorization.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { UsersService } from './users.service';
import { CreateUsersDto } from './DTOs/CreateUserDto';

@Controller('users')
export class UsersController {

   
  @Public()
  /*@Post('auth/register')*/
  @Post('register')
  async register(@Body() CreateUsersDto: any) {
    return { message: 'User registered successfully', data: CreateUsersDto };
  }

  @Public()
  @Post('auth/login')
  async login(@Body() loginDto: any) {
    return { message: 'Login successful', token: 'fake-jwt-token' }; // Replace with real login logic
  }

  @Public()
  @Get()
  @UseGuards(AuthGuard, AuthorizationGuard)
  @Roles('admin')
  async findAllUsers() {
    return { message: 'Fetching all users' };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, AuthorizationGuard)
  @Roles('admin', 'instructor')
  async updateUser(@Param('id') id: string, @Body() updateData: any) {
    return { message: `Updating user ${id}`, data: updateData };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, AuthorizationGuard)
  @Roles('admin')
  async deleteUser(@Param('id') id: string) {
    return { message: `Deleting user ${id}` };
  }

  


}

