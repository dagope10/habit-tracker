package com.proyecto.habittracker.repository;

import com.proyecto.habittracker.entities.Habito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitoRepository extends JpaRepository<Habito, Integer> {

    public List<Habito> findByUsuarioId(int idUsuario);

}
