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

  login(email: string, password: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify({ email, password });
    return this.http.post<{name: string, email: string}>('http://localhost:8080/login', body, {headers, withCredentials: true})
      .pipe(tap(res => {
        localStorage.setItem('user_email', res.email);        
        this.router.navigate(['/home']);
      }));
  }
}

