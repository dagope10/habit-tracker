package com.proyecto.habittracker.services;

import com.proyecto.habittracker.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.proyecto.habittracker.entities.Usuario;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario encontrarPorEmail(String email){
        return usuarioRepository.findByEmail(email).orElse(null);
    }
}
