// controllers.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  ModuleService } from './modules.service';
// import { ModulesSchema } from './modules.schema';
import { CreateModulesDto } from './DTOs/CreateModuleDto';
import { UpdateModulesDto } from './DTOs/UpdateModuleDto';
import { Module } from './models/modules.schema';

@Controller('modules')
export class ModuleController {
  constructor(private readonly ModuleService: ModuleService) {}

  @Post()
  async create(@Body() createModuleDto: CreateModulesDto): Promise<Module> {
    return this. ModuleService.create(createModuleDto);
  }

  @Get()
  async findAll(): Promise<Module[]> {
    return this. ModuleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Module> {
    return this. ModuleService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateModuleDto: UpdateModulesDto): Promise<Module> {
    return this. ModuleService.update(id, updateModuleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this. ModuleService.delete(id);
    return { message: 'Module successfully deleted' };
  }
}
