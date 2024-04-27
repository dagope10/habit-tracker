import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Habito } from '../app/models/Habito'
import * as jwtDecode from 'jwt-decode';
import { Categoria } from '../app/models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class HabitosService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }

  getHabitosByUsuarioId(usuarioId: string): Observable<Habito[]> {
    return this.http.get<Habito[]>(`${this.baseUrl}/habitos/${usuarioId}`);
  }


  crearHabito(habito: Habito): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertarHabitos`, habito);
  }

  marcarHabitoComoRealizado(habitoId: string): Observable<RespuestaHabito> {
    return this.http.put<RespuestaHabito>(`${this.baseUrl}/habitos/${habitoId}/realizado`, {}, { withCredentials: true });
  }


  actualizarDiasHabito(idHabito: string, diasConsecutivos: number, diasTotales: number): Observable<any> {
    const url = `${this.baseUrl}/habitos/${idHabito}/completado`;
    const body = { diasConsecutivos, diasTotales };
    return this.http.put(url, body, { withCredentials: true});

  }

  borrarHabito(idHabito: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/habitos/eliminar/${idHabito}`, {withCredentials: true});
  }

}



interface RespuestaHabito {
  data: any; // Aquí puedes ser más específico, por ejemplo, usando una interfaz para los datos de hábito
  message?: string;
}

