import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationsService } from './configurations/configurations.service';
import { CreateConfigurationDto } from './configurations/DTOs/CreateConfigsDto';
import { UpdateConfigurationDto } from './configurations/DTOs/UpdateConfigsDto';

async function CreateConfiguration() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const configurationsService = app.get(ConfigurationsService);

  // Example: Test the create method
  const createConfigurationDto: CreateConfigurationDto = {
    configId: 'config001',
    settings: {
      theme: 'dark',
      language: 'en',
      notifications: true,
    },
    createdBy: 'Admin',
    createdAt: new Date(),
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  const result = await configurationsService.create(createConfigurationDto);
  console.log('Configuration created successfully:', result);

  await app.close();
}

async function GetAllConfigurations() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const configurationsService = app.get(ConfigurationsService);

  // Call the function to get all configurations
  await testGetAll(configurationsService);

  await app.close();
}

// Function to get all configurations
async function testGetAll(configurationsService: ConfigurationsService) {
  try {
    console.log('Fetching all configurations...');
    const configs = await configurationsService.findAll();
    console.log('Configurations fetched successfully:', configs);
  } catch (error) {
    console.error('Error fetching configurations:', error.message);
  }
}

async function GetConfigurationById(configId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const configurationsService = app.get(ConfigurationsService);

  // Call the function to get a specific configuration
  await testGetById(configurationsService, configId);

  await app.close();
}

// Function to get a specific configuration by ID
async function testGetById(configurationsService: ConfigurationsService, configId: string) {
  try {
    console.log(`Fetching configuration with ID: ${configId}`);
    const config = await configurationsService.findOne(configId);
    console.log('Configuration fetched successfully:', config);
  } catch (error) {
    console.error(`Error fetching configuration with ID ${configId}:`, error.message);
  }
}

async function UpdateConfiguration(configId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const configurationsService = app.get(ConfigurationsService);

  // Example configuration update data
  const updateConfigurationDto: UpdateConfigurationDto = {
    settings: {
      theme: 'light',
      notifications: false,
    },
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(configurationsService, configId, updateConfigurationDto);

  await app.close();
}

// Function to update a configuration by ID
async function testUpdate(
  configurationsService: ConfigurationsService,
  configId: string,
  updateConfigurationDto: UpdateConfigurationDto,
) {
  try {
    console.log(`Attempting to update configuration with ID: ${configId}`);
    const updatedConfig = await configurationsService.update(configId, updateConfigurationDto);
    console.log('Configuration updated successfully:', updatedConfig);
  } catch (error) {
    console.error('Error updating configuration:', error.message);
  }
}

async function DeleteConfiguration(configId: string) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const configurationsService = app.get(ConfigurationsService);

  // Call the delete function
  await testDelete(configurationsService, configId);

  await app.close();
}

// Function to delete a configuration by ID
async function testDelete(configurationsService: ConfigurationsService, configId: string) {
  try {
    console.log(`Attempting to delete configuration with ID: ${configId}`);
    await configurationsService.delete(configId);
    console.log('Configuration deleted successfully.');
  } catch (error) {
    console.error('Error deleting configuration:', error.message);
  }
}

// Example function calls
// CreateConfiguration();
// GetAllConfigurations();
// GetConfigurationById('config001');
// UpdateConfiguration('config001');
// DeleteConfiguration('config001');
