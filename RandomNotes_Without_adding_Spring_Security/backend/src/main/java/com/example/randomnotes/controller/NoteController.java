package com.example.randomnotes.controller;

import com.example.randomnotes.model.Note;
import com.example.randomnotes.service.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/api/note/add")
    public Note addNote(@RequestBody Note note){
        return noteService.addNote(note);
    }

    @GetMapping("/api/note/getAll")
    public List<Note> getAllNotes(){
        return noteService.getAllNotes();
    }
}
