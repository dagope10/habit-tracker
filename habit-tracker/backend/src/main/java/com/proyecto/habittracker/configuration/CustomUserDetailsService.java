package com.proyecto.habittracker.configuration;

import com.proyecto.habittracker.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.proyecto.habittracker.repository.UsuarioRepository;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private final UsuarioRepository usuarioRepository;

    public CustomUserDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email)

                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + email));
        String password = "{noop}" + usuario.getPassword();
        return new org.springframework.security.core.userdetails.User(usuario.getEmail(), password, new ArrayList<>());

    }
}

