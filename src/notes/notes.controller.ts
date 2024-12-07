import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
    Req,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { NotesService } from './notes.service';
  
  @Controller('notes')
  export class NotesController {
    constructor(private readonly notesService: NotesService) {}
  
    // Create a new note
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createNoteDto, @Req() req) {
      const userId = req.user?.id; // Assumes user authentication middleware adds the user object
      if (!userId) {
        throw new Error('Authentication required');
      }
      return await this.notesService.create({ ...createNoteDto, userId });
    }
  
    // Get all notes for the authenticated user
    @Get()
    async findAll(@Req() req) {
      const userId = req.user?.id; // Assumes user authentication middleware adds the user object
      if (!userId) {
        throw new Error('Authentication required');
      }
      return await this.notesService.findAll(userId);
    }
  
    // Get details of a specific note
    @Get(':id')
    async findOne(@Param('id') noteId: string, @Req() req) {
      const userId = req.user?.id;
      if (!userId) {
        throw new Error('Authentication required');
      }
      return await this.notesService.findOne(noteId, userId);
    }
  
    // Update a note
    @Patch(':id')
    async update(@Param('id') noteId: string, @Body() updateNoteDto, @Req() req) {
      const userId = req.user?.id;
      if (!userId) {
        throw new Error('Authentication required');
      }
      return await this.notesService.update(noteId, userId, updateNoteDto);
    }
  
    // Delete a note
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') noteId: string, @Req() req) {
      const userId = req.user?.id;
      if (!userId) {
        throw new Error('Authentication required');
      }
      await this.notesService.remove(noteId, userId);
    }
  }
  