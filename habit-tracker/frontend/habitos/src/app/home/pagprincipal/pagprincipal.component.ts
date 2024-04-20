import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabitosService } from '../../../service/habitos.service';
import { Habito } from '../../models/Habito';


@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrl: './pagprincipal.component.css'
})
export class PagprincipalComponent implements OnInit {
  username: string | null = localStorage.getItem('username');
  habitos: any;
  id: string | null = localStorage.getItem('id');
  categorias: any[] = [];
  categoriaSeleccionada: string = 'todos'
  habitosFiltrados: Habito[] = [];

  constructor(private http: HttpClient, private habitosService: HabitosService){
    //El siguiente código es para el html de la página principal:
// src="{{ habito.medalla }}" alt="Medalla" style="width: 30px; height: 30px;
   
   
  }

  ngOnInit(): void {
    this.cargarHabitos();
   


    if (this.id) {
        this.http.get(`http://localhost:3000/habitos/${this.id}`,{ withCredentials: true}).subscribe((habitos: any) => {
          this.habitos = habitos;
          this.filtrarHabitos();
        });
      
    }

    


  }

  filtrarHabitos() {
    if (this.categoriaSeleccionada === 'todos') {
      this.habitosFiltrados = this.habitos;
    } else {
      const categoriaId = parseInt(this.categoriaSeleccionada, 10);
      this.habitosFiltrados = this.habitos.filter((habito: Habito) =>
        parseInt(habito.id_categoria, 10) === categoriaId // Convert id_categoria to number before comparison
      );
    }
  }

  cargarHabitos() {
    this.habitosService.obtenerCategorias().subscribe(categoriasBBDD => {
      this.categorias = categoriasBBDD;
    });

  }
  

}
