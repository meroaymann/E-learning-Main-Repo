import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Module, ModuleDocument } from  './models/modules.schema';

@Injectable()
export class ModuleService {
  constructor(
    @InjectModel(Module.name)
    private readonly moduleModel: Model<ModuleDocument>,
  ) {}

  // Add a new module to a course
  async create(courseId: string, data: Partial<Module>): Promise<Module> {
    const newModule = new this.moduleModel({ ...data, courseId });
    return await newModule.save();
  }

  // Get all modules for a course
  async findAllByCourse(courseId: string): Promise<Module[]> {
    return await this.moduleModel.find({ courseId }).exec();
  }

  // Get details of a specific module by ID
  async findById(id: string): Promise<Module> {
    const module = await this.moduleModel.findById(id).exec();
    if (!module) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }
    return module;
  }

  // Update a specific module by ID
  async update(id: string, data: Partial<Module>): Promise<Module> {
    const updatedModule = await this.moduleModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updatedModule) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }

    return updatedModule;
  }

  // Delete or deactivate a module
  async deleteOrDeactivate(id: string, deactivate = false): Promise<void> {
    if (deactivate) {
      // Set `isActive` to 'No' instead of deleting
      const deactivatedModule = await this.moduleModel
        .findByIdAndUpdate(id, { isActive: 'No' }, { new: true })
        .exec();

      if (!deactivatedModule) {
        throw new NotFoundException(`Module with ID ${id} not found`);
      }
    } else {
      // Delete the module
      const result = await this.moduleModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Module with ID ${id} not found`);
      }
    }
  }
}
