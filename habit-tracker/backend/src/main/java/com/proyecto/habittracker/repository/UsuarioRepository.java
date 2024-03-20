package com.proyecto.habittracker.repository;

import com.proyecto.habittracker.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {


    @Query("SELECT u FROM Usuario u WHERE u.email = ?1")
    public Optional<Usuario> findByEmail(String email);
}
