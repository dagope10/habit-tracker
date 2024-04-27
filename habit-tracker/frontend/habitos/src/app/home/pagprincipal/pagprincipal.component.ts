import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabitosService } from '../../../service/habitos.service';
import { Habito } from '../../models/Habito';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrl: './pagprincipal.component.css',
})
export class PagprincipalComponent implements OnInit {
  username: string | null = localStorage.getItem('username');
  habitos: any;
  id: string | null = localStorage.getItem('id');
  categorias: any[] = [];
  categoriaSeleccionada: string = 'todos';
  habitosFiltrados: Habito[] = [];

  constructor(
    private http: HttpClient,
    private habitosService: HabitosService,
    private authService: AuthService
  ) {
    //El siguiente código es para el html de la página principal:
    // src="{{ habito.medalla }}" alt="Medalla" style="width: 30px; height: 30px;
  }

  ngOnInit(): void {
    this.cargarCategorias();

    this.cargarHabitos();

  }



  borrarHabito(habito: Habito) {
    this.habitosService.borrarHabito(habito.id_habito).subscribe({
      next: (response) => {
        console.log('Hábito eliminado', response);
        this.habitosFiltrados = this.habitosFiltrados.filter(h => h.id_habito !== habito.id_habito);
      },
      error: (error) => {
        console.log('Error al borrar el hábito', error);
      }

    })

    
  }


  cerrarSesion() {
    this.authService.logout().subscribe({
      next: (response: any) => {
        console.log('Sesión cerrada correctamente', response);
      },
      error: (error: any) => {
        console.error('Error al cerrar la sesión', error);
      }
    })
      }




      




  marcarComoRealizado(habito: Habito): void {
    this.habitosService.marcarHabitoComoRealizado(habito.id_habito).subscribe({
      next: (response) => {
        habito.ultimaVezRealizado = new Date();
        habito.puedeSerRealizadoHoy = false;
        habito.diasConsecutivos++;
        habito.diasTotales++;
        this.habitosService.actualizarDiasHabito(habito.id_habito, habito.diasConsecutivos, habito.diasTotales).subscribe({
          next: (response) => {
            console.log('Días actualizados correctamente', response);
          }, error: (error) => {
            console.error('Error al actualizar los días del hábito', error);
          }
        })
      },
      error: (error) => {
        console.error('Error al marcar el hábito como realizado:', error);
      },
    });
  }

  fueRealizadoHoy(habito: Habito): boolean {
    const ultimaVezRealizado = new Date(habito.ultimaVezRealizado);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    return ultimaVezRealizado >= hoy;
  }

  comprobarHabitos() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const anteayer = new Date(hoy);
    anteayer.setDate(hoy.getDate() - 2); // Ajusta a dos días atrás

    const haceDosDias = new Date(hoy);
    haceDosDias.setDate(hoy.getDate() - 3);

    this.habitos.forEach((habito: Habito) => {
      if (!habito.ultimaVezRealizado) {
        console.log('Fecha de último realizado no disponible para el hábito:', habito.nombre);
        return; // Salta al siguiente hábito si no hay fecha de último realizado
      }
      
      const ultimaVezRealizado = new Date(habito.ultimaVezRealizado);
      if (ultimaVezRealizado.getTime() === anteayer.getTime()) {
        console.log(
          'La última vez que registraste un hábito fue anteayer. Si no lo registras hoy, mañana perderás tu progreso'
        );
      }
      if (ultimaVezRealizado.getTime() <= haceDosDias.getTime()) {
        console.log(`${habito.id_habito}, has perdido el progreso`);
        habito.diasConsecutivos = 0;
        //Aquí iría la función para perder el progreso, como la 1medalla.
        habito.medalla = 'Sin medalla';
      }
    });
  }

  filtrarHabitos() {
    if (this.categoriaSeleccionada === 'todos') {
      this.habitosFiltrados = this.habitos;
    } else {
      const categoriaId = parseInt(this.categoriaSeleccionada, 10);
      this.habitosFiltrados = this.habitos.filter(
        (habito: Habito) => parseInt(habito.id_categoria, 10) === categoriaId
      );
    }
  }

  cargarCategorias() {
    this.habitosService.obtenerCategorias().subscribe((categoriasBBDD) => {
      this.categorias = categoriasBBDD;
    });
  }

  cargarHabitos() {
    if (this.id) {
      this.http
        .get<Habito[]>(`http://localhost:3000/habitos/${this.id}`, {
          withCredentials: true,
        })
        .subscribe({
          next: (habitos) => {
            this.habitos = habitos.map((habito) => {
              habito.puedeSerRealizadoHoy = !this.fueRealizadoHoy(habito);
              return habito;
            });
            this.filtrarHabitos();
            this.comprobarHabitos();
          },
          error: (error) => console.error('Error al cargar hábitos:', error),
        });
    }
  }
}
