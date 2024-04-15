import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { tap,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



// La función no funciona correctamente, no se puede hacer login. Hay que revisarla.

export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify({ email, password });
    return this.http.post<LoginResponse>('http://localhost:3000/', body, {headers, withCredentials: true})
      .pipe(
        tap(res => { 
         if(res.message === 'Inicio de sesión exitoso'){
          
          this.router.navigate(['/home']);
         }
         
        }),
        catchError(error => {
          console.error(error);
          return throwError(() => new Error('Error al hacer login'));
        })
      );
  }
}
export interface LoginResponse {
  message: string;
  nombre?: string;
  id?: string;
}

