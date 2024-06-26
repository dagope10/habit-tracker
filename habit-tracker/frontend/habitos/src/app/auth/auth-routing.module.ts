// auth-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrar-usuario', component: RegistrarUsuarioComponent }
  ];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
