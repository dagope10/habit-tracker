package com.proyecto.habittracker.controller;

import com.proyecto.habittracker.dto.LoginRequest;
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

    @PostMapping("/")
    public ResponseEntity<?> autenticarUsuario(@RequestBody LoginRequest loginRequest){
        Usuario usuario = usuarioService.encontrarPorEmail(loginRequest.getUsuario());

        if(usuario != null && usuario.getPassword() == loginRequest.getPassword()){

            return ResponseEntity.ok().body("Todo ok José Luis");
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No todo ok José Luis");
        }

    }
}
