package com.notes.mynote.controller;

import com.notes.mynote.model.Note;
import com.notes.mynote.service.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/api/note/add")
    public ResponseEntity<?> createNote(@RequestBody Note note){
        return ResponseEntity.status(HttpStatus.CREATED).body(noteService.createNote(note));
    }

    @GetMapping("/api/note/getAll")
    public ResponseEntity<?> getNotes(){
        return ResponseEntity.status(HttpStatus.OK).body(noteService.getNotes());
    }

    @GetMapping("/api/note/getNote/{noteId}")
    public ResponseEntity<?> getNote(@PathVariable int noteId){
        return ResponseEntity.status(HttpStatus.OK).body(noteService.getNote(noteId));

    }
}
