import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { ForumRepliesService } from './forum-replies.service';
  import { CreateForumReplyDto } from './DTOs/CreateForumRepliesDto';
  import { UpdateForumReplyDto } from './DTOs/UpdateForumRepliesDto';
  
  @Controller('forum_replies')
  export class ForumRepliesController {
    constructor(private readonly forumRepliesService: ForumRepliesService) {}
  
    @Post(':forumId/replies')
    @HttpCode(HttpStatus.CREATED)
    create(
      @Param('forumId') forumId: string,
      @Body() createForumReplyDto: CreateForumReplyDto,
    ) {
      createForumReplyDto.forumId = forumId; // Associate reply with forum
      return this.forumRepliesService.create(createForumReplyDto);
    }
  
    @Get(':forumId/replies')
    findAll(@Param('forumId') forumId: string) {
      return this.forumRepliesService.findAllByForumId(forumId);
    }
  
    @Get(':id')
    findOne(@Param('id') replyId: string) {
      return this.forumRepliesService.findOne(replyId);
    }
  
    @Patch(':id')
    update(
      @Param('id') replyId: string,
      @Body() updateForumReplyDto: UpdateForumReplyDto,
    ) {
      return this.forumRepliesService.update(replyId, updateForumReplyDto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') replyId: string) {
      return this.forumRepliesService.remove(replyId);
    }
  }  