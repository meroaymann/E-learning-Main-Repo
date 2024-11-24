import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesSchema } from '../notes/models/notes.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name:'notes',schema:NotesSchema}])],
  controllers: [NotesController],
  providers: [NotesService]  
})
export class NotesModule {}