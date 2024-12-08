import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CourseService } from './courses/courses.service';
import { CreateCoursesDto } from './courses/DTOs/CreateCourseDto';

async function CreateCourse() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const courseService = app.get(CourseService);

  // Example: Test the register method
 
  const createCourseDto: CreateCoursesDto = {
    courseId:'CRS505',
    title:'Course1' ,
    description:'Course1 Description',
    category: 'Category1',
    difficultyLevel:'Beginner',// Difficulty level (Beginner, Intermediate, Advanced)
    minCoursePercentage: 80 ,
    isActive: 'Yes',
    createdBy: 'Admin',
    createdAt: new Date()
  };

  const result = await courseService.createCourse(createCourseDto);
  console.log(result);

  await app.close();
}
async function DeleteCourse(courseId:string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const courseService = appContext.get(CourseService);

  // Example userId to delete
  //const userId = '123'; // Replace with a valid userId

  // Call the delete function
  await testDelete(courseService, courseId);

  await appContext.close();
}

// Function to delete a user
async function testDelete(courseService: CourseService, courseId: string) {
  try {
    console.log(`Attempting to delete course with ID: ${courseId}`);
    const result = await courseService.deleteCourse(courseId);
    console.log('Course deleted successfully:', result);
  } catch (error) {
    console.error('Error deleting course:', error.message);
  }
}


async function UpdateCourse(courseId:string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const courseService = appContext.get(CourseService);

  // Example userId and update data
  //const userId = '123'; // Replace with a valid userId
  const updateData = {
    title:'Course2' ,
    description:'Course2 Description',
    category: 'Category2',
    difficultyLevel:'Advanced',// Difficulty level (Beginner, Intermediate, Advanced)
    minCoursePercentage: 100 ,
    isActive: 'No',
    updatedBy: 'Instructor',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(courseService, courseId, updateData);

  await appContext.close();
}

// Function to update a user
async function testUpdate(courseService: CourseService, courseId: string, updateData: any) {
  try {
    console.log(`Attempting to update course with ID: ${courseId}`);
    const updatedUser = await courseService.updateCourse(courseId, updateData);
    console.log('course updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating course:', error.message);
  }
}

/*
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
}*/
//DeleteCourse("CRS505");
CreateCourse();
//UpdateCourse("CRS505")
//DeleteUser();
//UpdateUser("234");
//GetAllUsers();
//GetSingleUser("234");