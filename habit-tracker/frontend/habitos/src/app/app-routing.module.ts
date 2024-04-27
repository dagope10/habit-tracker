import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, // Ruta predeterminada que redirige a 'home'
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: '', redirectTo:'auth/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
