import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './models/courses.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

  async createCourse(courseDto: Partial<Course>): Promise<Course> {
    const newCourse = new this.courseModel(courseDto);
    return newCourse.save();
  }

  async getAllCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async getCourseById(courseId: string): Promise<Course> {
    const course = await this.courseModel.findOne({ courseId }).exec();
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    return course;
  }

  async updateCourse(courseId: string, updateDto: Partial<Course>): Promise<Course> {
    const updatedCourse = await this.courseModel
      .findOneAndUpdate({ courseId }, updateDto, { new: true })
      .exec();
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    return updatedCourse;
  }

  async deleteCourse(courseId: string): Promise<void> {
    const result = await this.courseModel.deleteOne({ courseId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
  }
}