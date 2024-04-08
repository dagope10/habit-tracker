package com.proyecto.habittracker.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.habittracker.entities.Categoria;
import com.proyecto.habittracker.repository.CategoriaRepository;

public class CategoriaDaoImpl implements CategoriaDao{
	
	@Autowired
	private CategoriaRepository crepo;

	@Override
	public Categoria buscarUna(int idTipo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Categoria> todas() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Categoria categoria) {
		// TODO Auto-generated method stub
		int check =0;
		try {
			crepo.save(categoria);
			check=1;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}


	@Override
	public int delete(int idCateogria) {
		// TODO Auto-generated method stub
		int check = 0;
		try {
			crepo.deleteById(idCateogria);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;	
	}

	@Override
	public int modificar(Categoria categoria) {
		// TODO Auto-generated method stub
		int check = 0;
		Categoria c1 = null;
		try {
			c1 = crepo.findById(categoria.getIdCategoria()).orElse(null);
			c1 = categoria;
			crepo.save(c1);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}

}
