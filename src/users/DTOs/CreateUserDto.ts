export class CreateUserDTO {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: string;
    profilePictureUrl?: string; // Optional field
    createdAt: Date;
  }