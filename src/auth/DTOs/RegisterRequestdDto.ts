import { Course } from "src/courses/models/courses.schema";
import { Role } from '../Decorators/roles.decorator'

export class RegisterRequestDto {
   
    email:string;
    name: string;
    age: Number;
    password:string
    role: string;
    createdAt: Date
  }