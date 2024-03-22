package com.proyecto.habittracker.services;

import com.proyecto.habittracker.entities.Habito;
import com.proyecto.habittracker.repository.HabitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitoService {
    @Autowired
    private HabitoRepository habitoRepository;

    public List<Habito> devolverHabitosPorUsuario(int idUsuario){
        return habitoRepository.findByUsuarioId(idUsuario);
    }

}
