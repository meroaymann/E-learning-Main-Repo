export class UpdateUsersDto {
  name?: string; // Full name of the user (optional)
  email?: string; // User’s email address (optional)
  passwordHash?: string; // Hashed password for secure authentication (optional)
  role?: string; // Role of the user (student, instructor, admin) (optional)
  profilePictureUrl?: string; // URL of the user’s profile picture (optional)
  isActive?: string; // The user is active (Yes, No) (optional)
  updatedBy?: string; // userId who updated the record (optional)
  updatedAt?: Date; // Timestamp of record update (optional)
}