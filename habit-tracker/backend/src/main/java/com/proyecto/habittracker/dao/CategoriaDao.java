package com.proyecto.habittracker.dao;

import java.util.List;

import com.proyecto.habittracker.entities.Categoria;

public interface CategoriaDao {
	
	Categoria buscarUna(int idCateogria);
	List<Categoria> todas();
	int insert (Categoria categoria);
	int delete (int idCateogria);
	int modificar(Categoria categoria);

}
