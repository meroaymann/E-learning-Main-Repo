import { Module } from '@nestjs/common';
import { NotesSchema } from '../notes/models/notes.schema';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Note',schema:NotesSchema}])],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [NotesService, MongooseModule]
})

export class NotesModule {}