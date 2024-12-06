import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { Configuration } from './models/configs.schema';
import { CreateConfigurationDto } from './DTOs/CreateConfigsDto';
import { UpdateConfigurationDto } from './DTOs/UpdateConfigsDto';

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  // Create a new configuration
  @Post()
  async create(@Body() createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    return this.configurationsService.create(createConfigurationDto);
  }

  // Get all configurations
  @Get()
  async findAll(): Promise<Configuration[]> {
    return this.configurationsService.findAll();
  }

  // Get configuration by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Configuration> {
    return this.configurationsService.findOne(id);
  }

  // Update configuration by ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConfigurationDto: UpdateConfigurationDto
  ): Promise<Configuration> {
    return this.configurationsService.update(id, updateConfigurationDto);
  }

  // Delete configuration by ID
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.configurationsService.delete(id);
    return { message: `Configuration with ID ${id} has been deleted` };
  }
}
