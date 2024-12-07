import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ForumsUsersService } from 'src/forums-users/forums-users.service';
import { CreateForumUserDto } from 'src/forums-users/DTOs/CreateForumUsersDto';
import { UpdateForumUserDto } from 'src/forums-users/DTOs/UpdateForumUsersDto';

async function RegisterForumUser() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const forumsUsersService = app.get(ForumsUsersService);

  // Example: Test the create method
  const createForumUserDto: CreateForumUserDto = {
    forumUserId: 'rel001',
    forumId: 'forum123',
    userId: 'user456',
    isBlocked: 'No',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await forumsUsersService.create(createForumUserDto);
  console.log('Forum-User association created successfully:', result);

  await app.close();
}

async function DeleteForumUser(forumUserId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsUsersService = appContext.get(ForumsUsersService);

  // Call the delete function
  await testDelete(forumsUsersService, forumUserId);

  await appContext.close();
}

// Function to delete a forum-user association
async function testDelete(forumsUsersService: ForumsUsersService, forumUserId: string) {
  try {
    console.log(`Attempting to delete forum-user association with ID: ${forumUserId}`);
    await forumsUsersService.remove(forumUserId);
    console.log('Forum-User association deleted successfully.');
  } catch (error) {
    console.error('Error deleting forum-user association:', error.message);
  }
}

async function UpdateForumUser(forumUserId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsUsersService = appContext.get(ForumsUsersService);

  // Example forumUserId and update data
  const updateData: UpdateForumUserDto = {
    isBlocked: 'Yes',
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(forumsUsersService, forumUserId, updateData);

  await appContext.close();
}

// Function to update a forum-user association
async function testUpdate(forumsUsersService: ForumsUsersService, forumUserId: string, updateData: UpdateForumUserDto) {
  try {
    console.log(`Attempting to update forum-user association with ID: ${forumUserId}`);
    const updatedForumUser = await forumsUsersService.update(forumUserId, updateData);
    console.log('Forum-User association updated successfully:', updatedForumUser);
  } catch (error) {
    console.error('Error updating forum-user association:', error.message);
  }
}

async function GetAllForumUsers() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsUsersService = appContext.get(ForumsUsersService);

  // Call the function to get all forum-user associations
  await testGetAll(forumsUsersService);
  await appContext.close();
}

// Function to get all forum-user associations
async function testGetAll(forumsUsersService: ForumsUsersService) {
  try {
    console.log('Fetching all forum-user associations...');
    const forumUsers = await forumsUsersService.findAll();
    console.log('Forum-User associations fetched successfully:', forumUsers);
  } catch (error) {
    console.error('Error fetching forum-user associations:', error.message);
  }
}

async function GetSingleForumUser(forumUserId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumsUsersService = appContext.get(ForumsUsersService);

  // Call the function to get a specific forum-user association
  await testGetById(forumsUsersService, forumUserId);

  await appContext.close();
}

// Function to get a specific forum-user association by ID
async function testGetById(forumsUsersService: ForumsUsersService, forumUserId: string) {
  try {
    console.log(`Fetching forum-user association with ID: ${forumUserId}`);
    const forumUser = await forumsUsersService.findOne(forumUserId);
    console.log('Forum-User association fetched successfully:', forumUser);
  } catch (error) {
    console.error(`Error fetching forum-user association with ID ${forumUserId}:`, error.message);
  }
}

// Example function calls
// RegisterForumUser();
// DeleteForumUser('rel001');
// UpdateForumUser('rel001');
// GetAllForumUsers();
// GetSingleForumUser('rel001');