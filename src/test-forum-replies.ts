import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ForumRepliesService } from 'src/forum-replies/forum-replies.service';
import { CreateForumReplyDto } from 'src/forum-replies/DTOs/CreateForumRepliesDto';
import { UpdateForumReplyDto } from 'src/forum-replies/DTOs/UpdateForumRepliesDto';

async function RegisterReply() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const forumRepliesService = app.get(ForumRepliesService);

  // Example: Test the create method
  const createForumReplyDto: CreateForumReplyDto = {
    replyId: 'reply001',
    userId: 'user123',
    forumId: 'forum456',
    parentReplyId: null,
    replyContent: 'This is a reply to the forum.',
    replyLikeType: 'Yes',
    createdBy: 'Admin',
    createdAt: new Date(),
  };

  const result = await forumRepliesService.create(createForumReplyDto);
  console.log('Reply created successfully:', result);

  await app.close();
}

async function DeleteReply(replyId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumRepliesService = appContext.get(ForumRepliesService);

  // Call the delete function
  await testDelete(forumRepliesService, replyId);

  await appContext.close();
}

// Function to delete a reply
async function testDelete(forumRepliesService: ForumRepliesService, replyId: string) {
  try {
    console.log(`Attempting to delete reply with ID: ${replyId}`);
    await forumRepliesService.remove(replyId);
    console.log('Reply deleted successfully.');
  } catch (error) {
    console.error('Error deleting reply:', error.message);
  }
}

async function UpdateReply(replyId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumRepliesService = appContext.get(ForumRepliesService);

  // Example replyId and update data
  const updateData: UpdateForumReplyDto = {
    replyContent: 'Updated reply content.',
    replyLikeType: 'No',
    updatedBy: 'Admin',
    updatedAt: new Date(),
  };

  // Call the update function
  await testUpdate(forumRepliesService, replyId, updateData);

  await appContext.close();
}

// Function to update a reply
async function testUpdate(forumRepliesService: ForumRepliesService, replyId: string, updateData: UpdateForumReplyDto) {
  try {
    console.log(`Attempting to update reply with ID: ${replyId}`);
    const updatedReply = await forumRepliesService.update(replyId, updateData);
    console.log('Reply updated successfully:', updatedReply);
  } catch (error) {
    console.error('Error updating reply:', error.message);
  }
}

async function GetAllRepliesByForumId(forumId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumRepliesService = appContext.get(ForumRepliesService);

  // Call the function to get all replies for a specific forum
  await testGetAllByForumId(forumRepliesService, forumId);

  await appContext.close();
}

// Function to get all replies for a specific forum
async function testGetAllByForumId(forumRepliesService: ForumRepliesService, forumId: string) {
  try {
    console.log(`Fetching all replies for forum ID: ${forumId}`);
    const replies = await forumRepliesService.findAllByForumId(forumId);
    console.log('Replies fetched successfully:', replies);
  } catch (error) {
    console.error('Error fetching replies:', error.message);
  }
}

async function GetSingleReply(replyId: string) {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const forumRepliesService = appContext.get(ForumRepliesService);

  // Call the function to get a specific reply
  await testGetById(forumRepliesService, replyId);

  await appContext.close();
}

// Function to get a specific reply record by ID
async function testGetById(forumRepliesService: ForumRepliesService, replyId: string) {
  try {
    console.log(`Fetching reply with ID: ${replyId}`);
    const reply = await forumRepliesService.findOne(replyId);
    console.log('Reply fetched successfully:', reply);
  } catch (error) {
    console.error(`Error fetching reply with ID ${replyId}:`, error.message);
  }
}

// Example function calls
// RegisterReply();
// DeleteReply('reply001');
// UpdateReply('reply001');
// GetAllRepliesByForumId('forum456');
// GetSingleReply('reply001');