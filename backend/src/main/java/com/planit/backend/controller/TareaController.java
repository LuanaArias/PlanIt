package com.planit.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planit.backend.model.Tarea;
import com.planit.backend.repository.TareaRepository;

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin(origins = "https://planit-1-dbus.onrender.com")
public class TareaController {
    @Autowired
    private TareaRepository repositorio;

    @GetMapping
    public List<Tarea> getAll(){
        return repositorio.findAll();
    }

    @PostMapping
    public ResponseEntity<Tarea> create(@RequestBody @NonNull Tarea nuevaTarea) {
        Tarea guardada = repositorio.save(nuevaTarea);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardada);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(
        @PathVariable Long id,
        @RequestBody Tarea tareaActualizada) {

        Optional<Tarea> optionalTarea = repositorio.findById(id);

        if (optionalTarea.isEmpty()) {
            return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Tarea no encontrada");
        }

        Tarea tarea = optionalTarea.get();

        tarea.setTitle(tareaActualizada.getTitle());
        tarea.setDescription(tareaActualizada.getDescription());
        tarea.setCompleted(tareaActualizada.isCompleted());

        repositorio.save(tarea);

        return ResponseEntity.ok(tarea);
    }
    
    @PatchMapping("/{id}/completa")
    public ResponseEntity<?> marcarCompleta(@PathVariable @NonNull Long id) {

        return repositorio.findById(id)
            .map(tarea -> {
                tarea.setCompleted(!tarea.isCompleted());

                Tarea tareaActualizada = repositorio.save(tarea);

                return ResponseEntity.ok(tareaActualizada);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable @NonNull Long id) {
        repositorio.deleteById(id);
    }
}

