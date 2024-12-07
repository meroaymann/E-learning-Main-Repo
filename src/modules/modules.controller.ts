import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ModuleService } from './modules.service';
import { Module } from  './models/modules.schema';

@Controller('courses/:courseId/modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  // Add a module to a course
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('courseId') courseId: string,
    @Body() body: Partial<Module>,
  ): Promise<Module> {
    return await this.moduleService.create(courseId, body);
  }

  // Get all modules for a course
  @Get()
  async findAllByCourse(
    @Param('courseId') courseId: string,
  ): Promise<Module[]> {
    return await this.moduleService.findAllByCourse(courseId);
  }
}

@Controller('modules')
export class ModuleDetailController {
  constructor(private readonly moduleService: ModuleService) {}

  // Get details of a specific module
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Module> {
    return await this.moduleService.findById(id);
  }

  // Update a specific module
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<Module>,
  ): Promise<Module> {
    return await this.moduleService.update(id, body);
  }

  // Delete or deactivate a module
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOrDeactivate(
    @Param('id') id: string,
    @Query('deactivate') deactivate: boolean = false,
  ): Promise<void> {
    return await this.moduleService.deleteOrDeactivate(id, deactivate);
  }
}
