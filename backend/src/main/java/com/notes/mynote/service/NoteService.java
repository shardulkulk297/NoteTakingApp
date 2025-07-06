package com.notes.mynote.service;

import com.notes.mynote.model.Note;
import com.notes.mynote.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public List<Note> getNotes() {
        return noteRepository.findAll();
    }

    public Note getNote(int noteId) {
        return noteRepository.findById(noteId).orElseThrow(()->new RuntimeException("NOTE NOT FOUND"));
    }
}
