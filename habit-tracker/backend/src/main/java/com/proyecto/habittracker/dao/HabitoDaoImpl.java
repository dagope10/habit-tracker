package com.proyecto.habittracker.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.habittracker.entities.Habito;
import com.proyecto.habittracker.repository.HabitoRepository;

public class HabitoDaoImpl implements HabitoDao{
	
	@Autowired
	private HabitoRepository hrepo;


	@Override
	public Habito findById(int idHabito) {
		// TODO Auto-generated method stub
		return hrepo.findById(idHabito).orElse(null);

	}

	@Override
	public List<Habito> findAll() {
		// TODO Auto-generated method stub
		return hrepo.findAll();
	}

	@Override
	public List<Habito> buscarHabitosPorcategoria(int idCategoria) {
		// TODO Auto-generated method stub
		return hrepo.findByCategoriaId(idCategoria);
	}

	@Override
	public List<Habito> buscarHabitosPorUsuario(int idUsuario) {
		// TODO Auto-generated method stub
		return hrepo.findByUsuarioId(idUsuario);
		
	}

	@Override
	public int insert(Habito habito) {
		// TODO Auto-generated method stub
		int check =0;
		try {
			hrepo.save(habito);
			check=1;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}

	@Override
	public int delete(int idHabito) {
		// TODO Auto-generated method stub
		int check = 0;
		try {
			hrepo.deleteById(idHabito);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;	
	}

	@Override
	public int modificar(Habito habito) {
		// TODO Auto-generated method stub
		int check = 0;
		Habito h1 = null;
		try {
			h1 = hrepo.findById(habito.getIdHabito()).orElse(null);
			h1 = habito;
			hrepo.save(h1);
			check=1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return check;
	}

}
