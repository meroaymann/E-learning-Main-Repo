import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Configuration, ConfigurationDocument } from './models/configs.schema';
import { CreateConfigurationDto } from './DTOs/CreateConfigsDto';
import { UpdateConfigurationDto } from './DTOs/UpdateConfigsDto';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectModel(Configuration.name) private configurationModel: Model<ConfigurationDocument>
  ) {}

  // Create a new configuration
  async create(createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    const newConfig = new this.configurationModel({
      ...createConfigurationDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newConfig.save();
  }

  // Get all configurations
  async findAll(): Promise<Configuration[]> {
    return this.configurationModel.find().exec();
  }

  // Get configuration by ID
  async findOne(id: string): Promise<Configuration> {
    const config = await this.configurationModel.findOne({ configId: id }).exec();
    if (!config) {
      throw new NotFoundException(`Configuration with ID ${id} not found`);
    }
    return config;
  }

  // Update configuration by ID
  async update(id: string, updateConfigurationDto: UpdateConfigurationDto): Promise<Configuration> {
    const config = await this.configurationModel.findOneAndUpdate(
      { configId: id },
      { ...updateConfigurationDto, updatedAt: new Date() },
      { new: true }
    ).exec();

    if (!config) {
      throw new NotFoundException(`Configuration with ID ${id} not found`);
    }

    return config;
  }

  // Delete configuration by ID
  async delete(id: string): Promise<void> {
    const result = await this.configurationModel.deleteOne({ configId: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Configuration with ID ${id} not found`);
    }
  }
}
