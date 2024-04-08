package com.proyecto.habittracker.dao;

import java.util.List;

import com.proyecto.habittracker.entities.Usuario;

public interface UsuarioDao {
	
	Usuario findByEmail(String email);
	List<Usuario> findAll();
	int registro(Usuario usuario);
	int delete (int email);
	int modificar(Usuario usuario);

}
