import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('/api/notes')
export class NotesController {

  constructor(private notesService: NotesService) { }

  @Post()
  createNote(@Body() newNote: CreateNoteDto): Promise<Note> {
    return this.notesService.createNote(newNote)
  }

  @Get()
  getNotes(): Promise<Note[]> {
    return this.notesService.getNotes();
  }

  @Get('active')
  getNotesActive(): Promise<Note[]> {
    return this.notesService.getNotesActive();
  }

  @Get('archived')
  getNotesArchived(): Promise<Note[]> {
    return this.notesService.getNotesArchived();
  }
  
  @Get(':id')
  getNote(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.getNoteById(id);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number){
    return this.notesService.deleteNote(id);
  }

  @Patch(':id')
  updateNote(@Param('id', ParseIntPipe) id: number, @Body() note: UpdateNoteDto){
    return this.notesService.updateNote(id, note);
  }

}
