import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseService } from './courses.service';
import { Course } from './models/courses.schema';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async createCourse(@Body() courseDto: Partial<Course>): Promise<Course> {
    return this.courseService.createCourse(courseDto);
  }

  @Get()
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  @Get(':courseId')
  async getCourseById(@Param('courseId') courseId: string): Promise<Course> {
    return this.courseService.getCourseById(courseId);
  }

  @Put(':courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() updateDto: Partial<Course>,
  ): Promise<Course> {
    return this.courseService.updateCourse(courseId, updateDto);
  }

  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId: string): Promise<void> {
    return this.courseService.deleteCourse(courseId);
  }
}
