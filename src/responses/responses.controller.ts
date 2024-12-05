import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { CreateResponseDTO } from './DTOs/CreateResponseDto';
import { UpdateResponseDTO } from './DTOs/UpdateResponseDto';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  create(@Body() createResponseDto: CreateResponseDTO) {
    return this.responsesService.create(createResponseDto);
  }

  @Get()
  findAll() {
    return this.responsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResponseDto: UpdateResponseDTO) {
    return this.responsesService.update(id, updateResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsesService.remove(id);
  }
}
