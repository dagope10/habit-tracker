import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// La función no funciona correctamente, no se puede hacer login. Hay que revisarla.

export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{token: string}>('/http://localhost:8080', {username, password})
      .pipe(tap(res => {
        localStorage.setItem('auth_token', res.token);
        this.router.navigate(['/home']);
      }));
  }
}

