import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitosService } from '../../../../service/habitos.service';


@Component({
  selector: 'app-crear-habito',
  templateUrl: './crear-habito.component.html',
  styleUrl: './crear-habito.component.css'
})
export class CrearHabitoComponent {
  form: FormGroup;
  categorias: any[] = [];

  constructor(private fb: FormBuilder, private habitoService: HabitosService){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required]
    })
  }

  ngOnInit(){
    this.habitoService.obtenerCategorias().subscribe(categoriasBBDD => {
      this.categorias = categoriasBBDD;
        })
  }

  onSubmit(){
    if(this.form.valid) {
      const idUsuario = localStorage.getItem('id');
      this.form.value.usuarioId = idUsuario;
      this.habitoService.crearHabito(this.form.value).subscribe({
        next: (res: any) => {
          console.log("Hábito creado con éxito", res);

        },
        error: () => console.log("No se ha podido crear el hábito")
      })
    }
  }

  

}


