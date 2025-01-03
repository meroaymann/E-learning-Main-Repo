import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { ForumsService } from './forums.service';
  import { CreateForumDto } from './DTOs/CreateForumDto';
  import { UpdateForumDto } from './DTOs/UpdateForumDto';
  
  @Controller('forums')
  export class ForumsController {
    constructor(private readonly forumsService: ForumsService) {}
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createForumDto: CreateForumDto) {
      return this.forumsService.create(createForumDto);
    }
  
    @Get()
    findAll() {
      return this.forumsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.forumsService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateForumDto: UpdateForumDto) {
      return this.forumsService.update(id, updateForumDto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
      return this.forumsService.remove(id);
    }
  }  