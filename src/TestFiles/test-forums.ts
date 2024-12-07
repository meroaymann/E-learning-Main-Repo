import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ForumsService } from 'src/forums/forums.service';
import { CreateForumDto } from 'src/forums/DTOs/CreateForumDto';
import { UpdateForumDto } from 'src/forums/DTOs/UpdateForumDto';

async function RegisterForum() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const forumsService = app.get(ForumsService);

  // Example: Test the register method
  const createForumDto: CreateForumDto = {
    forumId: '001',
    userId: 'user123',
    courseId: 'course456',
    content: 'This is a test forum content.',
    isClosed: 'No',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await forumsService.create(createForumDto);
  console.log(result);

  await app.close();
}

async function DeleteForum(forumId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsService = appContext.get(ForumsService);

  // Call the delete function
  await testDelete(forumsService, forumId);

  await appContext.close();
}

// Function to delete a forum
async function testDelete(forumsService: ForumsService, forumId: string) {
  try {
    console.log(`Attempting to delete forum with ID: ${forumId}`);
    await forumsService.remove(forumId);
    console.log('Forum deleted successfully.');
  } catch (error) {
    console.error('Error deleting forum:', error.message);
  }
}

async function UpdateForum(forumId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsService = appContext.get(ForumsService);

  // Example forumId and update data
  const updateData: UpdateForumDto = {
    content: 'Updated forum content.',
    isClosed: 'Yes',
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(forumsService, forumId, updateData);

  await appContext.close();
}

// Function to update a forum
async function testUpdate(forumsService: ForumsService, forumId: string, updateData: UpdateForumDto) {
  try {
    console.log(`Attempting to update forum with ID: ${forumId}`);
    const updatedForum = await forumsService.update(forumId, updateData);
    console.log('Forum updated successfully:', updatedForum);
  } catch (error) {
    console.error('Error updating forum:', error.message);
  }
}

async function GetAllForums() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsService = appContext.get(ForumsService);

  // Call the function to get all forums
  await testGetAll(forumsService);
  await appContext.close();
}

// Function to get all forum records
async function testGetAll(forumsService: ForumsService) {
  try {
    console.log('Fetching all forums...');
    const forums = await forumsService.findAll();
    console.log('Forums fetched successfully:', forums);
  } catch (error) {
    console.error('Error fetching forums:', error.message);
  }
}

async function GetSingleForum(forumId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsService = appContext.get(ForumsService);

  // Call the function to get a specific forum
  await testGetById(forumsService, forumId);

  await appContext.close();
}

// Function to get a specific forum record by ID
async function testGetById(forumsService: ForumsService, forumId: string) {
  try {
    console.log(`Fetching forum with ID: ${forumId}`);
    const forum = await forumsService.findOne(forumId);
    console.log('Forum fetched successfully:', forum);
  } catch (error) {
    console.error(`Error fetching forum with ID ${forumId}:`, error.message);
  }
}

// Example function calls
// RegisterForum();
// DeleteForum('001');
// UpdateForum('001');
// GetAllForums();
// GetSingleForum('001');
