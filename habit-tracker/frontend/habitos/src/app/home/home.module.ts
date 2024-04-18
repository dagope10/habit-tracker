import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagprincipalComponent } from './pagprincipal/pagprincipal.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CrearHabitoComponent } from './nuevoHabito/crear-habito/crear-habito.component';
import { HabitosService } from '../../service/habitos.service';

@NgModule({
  declarations: [
    PagprincipalComponent,
    CrearHabitoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    PagprincipalComponent,
    RouterModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
