import {
    Controller,
    Post,
    Get,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { ForumsUsersService } from './forums-users.service';
  import { CreateForumUserDto } from './DTOs/CreateForumUsersDto';
  import { UpdateForumUserDto } from './DTOs/UpdateForumUsersDto';
  
  @Controller('forums_users')
  export class ForumsUsersController {
    constructor(private readonly forumsUsersService: ForumsUsersService) {}
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createForumUserDto: CreateForumUserDto) {
      return this.forumsUsersService.create(createForumUserDto);
    }
  
    @Get()
    findAll() {
      return this.forumsUsersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.forumsUsersService.findOne(id);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
      return this.forumsUsersService.remove(id);
    }
  
    @Post(':id')
    update(@Param('id') id: string, @Body() updateForumUserDto: UpdateForumUserDto) {
      return this.forumsUsersService.update(id, updateForumUserDto);
    }
  }  