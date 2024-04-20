import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Habito } from  '../app/models/Habito'
import * as jwtDecode from  'jwt-decode';
import { Categoria } from '../app/models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class HabitosService {

  private baseUrl= 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }

  getHabitosByUsuarioId(usuarioId: string): Observable<Habito[]> {
    return this.http.get<Habito[]>(`${this.baseUrl}/habitos/${usuarioId}`);  }

  getUserIdFromToken(): string {
    const token = localStorage.getItem('accessToken');
    if(token) {
      const decoded: any = (jwtDecode as any)(token);
      return decoded.id;
    }
    return '';
  }

  crearHabito(habito: Habito): Observable<any> {
    console.log(habito);
    return this.http.post(`${this.baseUrl}/insertarHabitos`, habito);
  }

  
}
