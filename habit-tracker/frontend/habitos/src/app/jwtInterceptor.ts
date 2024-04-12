import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aquí es donde obtendrías tu token JWT del almacenamiento local o de algún servicio de autenticación
    const token = localStorage.getItem('token');
    
    // Clona la solicitud para añadir la cabecera de autorización con el token JWT
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pasar la solicitud modificada al siguiente manejador
    return next.handle(request);
  }
}
