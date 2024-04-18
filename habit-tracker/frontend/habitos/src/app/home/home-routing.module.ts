import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagprincipalComponent } from './pagprincipal/pagprincipal.component';
import { CrearHabitoComponent } from './nuevoHabito/crear-habito/crear-habito.component';

const homeRoutes: Routes = [
    { path: '', component: PagprincipalComponent },
    { path: "nuevoHabito", component: CrearHabitoComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }