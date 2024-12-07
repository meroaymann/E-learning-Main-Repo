import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { UsersService } from 'src/users/users.service';
import { CreateUsersDto } from 'src/users/DTOs/CreateUserDto';

async function RegisterUser() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  // Example: Test the register method
  const createUserDto: CreateUsersDto = {
    userId: '234',
    name: 'Ayman',
    email: 'Ayman@example.com',
    passwordHash: 'password234',
    role: 'instructor',
    isActive: 'Yes',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await usersService.register(createUserDto);
  console.log(result);

  await app.close();
}
async function DeleteUser(userId:string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const usersService = appContext.get(UsersService);

  // Example userId to delete
  //const userId = '123'; // Replace with a valid userId

  // Call the delete function
  await testDelete(usersService, userId);

  await appContext.close();
}

// Function to delete a user
async function testDelete(usersService: UsersService, userId: string) {
  try {
    console.log(`Attempting to delete user with ID: ${userId}`);
    const result = await usersService.remove(userId);
    console.log('User deleted successfully:', result);
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
}


async function UpdateUser(userId:string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const usersService = appContext.get(UsersService);

  // Example userId and update data
  //const userId = '123'; // Replace with a valid userId
  const updateData = {
    name: 'Updated Name',
    email: 'updated@example.com',
    role: 'admin', // Example role
    isActive: 'Yes',
  };

  // Call the update function
  await testUpdate(usersService, userId, updateData);

  await appContext.close();
}

// Function to update a user
async function testUpdate(usersService: UsersService, userId: string, updateData: any) {
  try {
    console.log(`Attempting to update user with ID: ${userId}`);
    const updatedUser = await usersService.update(userId, updateData);
    console.log('User updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
}

async function GetAllUsers() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const usersService = appContext.get(UsersService);

  // Call the function to get all users
  await testGetAll(usersService);
  await appContext.close();
}

// Function to get all user records
async function testGetAll(usersService: UsersService) {
  try {
    console.log('Fetching all users...');
    const users = await usersService.findAll();
    console.log('Users fetched successfully:', users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
}

async function GetSingleUser(userId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const usersService = appContext.get(UsersService);

  // Example userId to fetch
  //const userId = '123'; // Replace with a valid userId

  // Call the function to get a specific user
  await testGetById(usersService, userId);

  await appContext.close();
}

// Function to get a specific user record by ID
async function testGetById(usersService: UsersService, userId: string) {
  try {
    console.log(`Fetching user with ID: ${userId}`);
    const user = await usersService.findById(userId);
    console.log('User fetched successfully:', user);
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error.message);
  }
}

//RegisterUser();
//DeleteUser();
//UpdateUser("234");
//GetAllUsers();
//GetSingleUser("234");