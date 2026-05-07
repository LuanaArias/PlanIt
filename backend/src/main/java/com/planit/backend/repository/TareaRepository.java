package com.planit.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planit.backend.model.Tarea;

public interface TareaRepository extends JpaRepository<Tarea, Long> {
}

