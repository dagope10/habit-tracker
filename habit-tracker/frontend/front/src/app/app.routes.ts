import { Routes } from '@angular/router';
import { FormularioHabitosComponent } from './formulario-habitos/formulario-habitos.component';
import { ListaHabitosComponent } from './lista-habitos/lista-habitos.component';

export const routes: Routes = [
    { path: 'formulario-habitos', component: FormularioHabitosComponent},
    { path:'habitos', component: ListaHabitosComponent}
];
