export class CreateUsersDto {
  userId: string; // Unique identifier for the user
  name: string; // Full name of the user
  email: string; // User’s email address
  passwordHash: string; // Hashed password for secure authentication
  role: string; // Role of the user (student, instructor, admin)
  profilePictureUrl?: string; // URL of the user’s profile picture (optional)
  isActive: string; // The user is active (Yes, No)
  createdBy: string; // userId who created the record
  createdAt: Date; // Timestamp of record creation
}