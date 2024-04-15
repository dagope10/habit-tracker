import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login(email: string, password: string, event: Event) {
    event.preventDefault();
    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (response.message === 'Inicio de sesión exitoso') {
          // Asegúrate de que el nombre del campo sea el correcto
          // Por ejemplo, si el servidor devuelve un campo 'nombre' que contiene el nombre del usuario
          localStorage.setItem('username', response.nombre || "nombre no encontrado");
          localStorage.setItem('id', response.id || "ID no encontrado");
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error(error);
        // Manejar el error de login adecuadamente
        // Por ejemplo, mostrar un mensaje al usuario
      }
    });
  }
}

