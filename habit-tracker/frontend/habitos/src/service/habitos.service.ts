import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habito } from  '../app/models/Habito'
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class HabitosService {

  private baseUrl= 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getHabitosByUsuarioId(usuarioId: string): Observable<Habito[]> {
    return this.http.get<Habito[]>(`${this.baseUrl}/habitos/${usuarioId}`);  }

  getUserIdFromToken(): string {
    const token = localStorage.getItem('accessToken');
    if(token) {
      const decoded: any = (jwt_decode as any)(token);
      return decoded.id;
    }
    return '';
  }
}
