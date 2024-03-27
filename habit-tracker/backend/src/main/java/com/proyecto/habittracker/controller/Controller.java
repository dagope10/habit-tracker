package com.proyecto.habittracker.controller;

import com.proyecto.habittracker.dto.LoginRequest;
import com.proyecto.habittracker.dto.LoginResponse;
import com.proyecto.habittracker.entities.Habito;
import com.proyecto.habittracker.entities.Usuario;
import com.proyecto.habittracker.services.CategoriaService;
import com.proyecto.habittracker.services.HabitoService;
import com.proyecto.habittracker.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class Controller {

    @Autowired
    private CategoriaService categoriaService;
    @Autowired
    private HabitoService habitoService;
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/habitos/{id}")
    public List<Habito> devolverHabitosPorUsuario(@PathVariable("id") int idUsuario){
        return habitoService.devolverHabitosPorUsuario(idUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<?> autenticarUsuario(@RequestBody LoginRequest loginRequest){
        Usuario usuario = usuarioService.encontrarPorEmail(loginRequest.getEmail());
        System.out.println(loginRequest.getEmail());
        System.out.println(loginRequest.getPassword());

        System.out.println(usuario.getPassword() + usuario.getEmail());

        if(usuario != null && usuario.getPassword().equals(loginRequest.getPassword())){
            LoginResponse response = new LoginResponse();
            response.setEmail(usuario.getEmail());
            return ResponseEntity.ok(response);
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No todo ok José Luis");
        }
    }
}





