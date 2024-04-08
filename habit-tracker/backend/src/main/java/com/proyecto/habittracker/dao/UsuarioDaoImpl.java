package com.proyecto.habittracker.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.habittracker.entities.Habito;
import com.proyecto.habittracker.entities.Usuario;
import com.proyecto.habittracker.repository.UsuarioRepository;

public class UsuarioDaoImpl implements UsuarioDao{
	
	@Autowired
	private UsuarioRepository urepo;

	@Override
	public Usuario findByEmail(String email) {
		// TODO Auto-generated method stub
		return urepo.findByEmail(email).orElse(null);
	}

	@Override
	public List<Usuario> findAll() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}

	@Override
	public int registro(Usuario usuario) {
		// TODO Auto-generated method stub
		int check =0;
		try {
			urepo.save(usuario);
			check=1;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}

	@Override
	public int delete(int email) {
		// TODO Auto-generated method stub
		int check = 0;
		try {
			urepo.deleteById(email);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;	
	}

	@Override
	public int modificar(Usuario usuario) {
		// TODO Auto-generated method stub
		int check = 0;
		Usuario u1 = null;
		try {
			u1 = urepo.findById(usuario.getId()).orElse(null);
			u1 = usuario;
			urepo.save(u1);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}

}
