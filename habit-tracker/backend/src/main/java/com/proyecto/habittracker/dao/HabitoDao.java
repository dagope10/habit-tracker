package com.proyecto.habittracker.dao;

import java.util.List;

import com.proyecto.habittracker.entities.Habito;

public interface HabitoDao {
	
	Habito findById(int idHabito);
	List<Habito> findAll();
	List<Habito> buscarHabitosPorcategoria(int idCategoria);
	List<Habito> buscarHabitosPorUsuario(int idUsuario);
	int insert (Habito habito);
	int delete (int idHabito);
	int modificar(Habito habito);

}
