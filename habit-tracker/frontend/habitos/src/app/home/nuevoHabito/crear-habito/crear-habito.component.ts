import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitosService } from '../../../../service/habitos.service';
import { Categoria } from '../../../models/Categoria';

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
    this.habitoService.obtenerCategorias().subscribe(categorias => {
      this.categorias = categorias;
    })
  }

}


