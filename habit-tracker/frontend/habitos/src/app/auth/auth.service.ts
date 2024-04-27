import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { tap,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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
     
          
          this.router.navigate(['/home']);
         
         
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
                console.log('Respuesta del servidor', res)
                  localStorage.setItem('id', res.id || '');
                  localStorage.setItem('username', res.nombre || '')
                  this.router.navigate(['/auth/login'])
              }),
              catchError(error => {
                console.log('Error de registro', error);
                return throwError(() => new Error('Error al registrar usuario'));

              })
            )


  }


  logout() {
    return this.http.post('http://localhost:3000/logout', {}, {withCredentials: true})
    .pipe(
      tap(() => {
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        this.router.navigate(['/auth/login']);
      }),
      catchError(error => {
        console.log('Error al cerrar la sesión', error);
        return throwError(() => new Error());
      })
    );
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

