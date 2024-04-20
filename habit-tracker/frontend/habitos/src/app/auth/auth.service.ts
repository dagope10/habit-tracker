import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { tap,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify({ email, password });
    return this.http.post<LoginResponse>('http://localhost:3000/login', body, {headers, withCredentials: true})
      .pipe(
        tap(res => { 
         if(res.message === 'Inicio de sesión exitoso'){
          
          this.router.navigate(['/home']);
         }
         
        }),
        catchError(error => {
          console.log(error);
          return throwError(() => new Error('Error al hacer login'));
        })
      );
  }


  registrarUsuario(nombre: string, email: string, password: string){
    const headers= {'Content-Type': 'application/json'};
    const body = JSON.stringify({nombre, email, password});
    console.log(body)
    return this.http.post<RegisterResponse>('http://localhost:3000/registrar-usuario', body, {headers})
            .pipe(
              tap(res => {
                if(res.message === 'Registro exitoso'){
                  localStorage.setItem('id', res.id || '');
                  localStorage.setItem('nombre', res.nombre || '')
                  this.router.navigate(['/home'])
                }
              }),
              catchError(error => {
                console.log('Error de registro', error);
                return throwError(() => new Error('Error al registrar usuario'));

              })
            )


  }
}

















export interface RegisterResponse {
  message: string;
  id?: string;
  nombre?: string;
}



export interface LoginResponse {
  message: string;
  nombre?: string;
  id?: string;
}

