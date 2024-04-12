import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { of } from 'rxjs'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService : AuthService, private router : Router) {}
  login(email: string, password: string, event: Event) {
    event.preventDefault();
    this.authService.login(email, password).subscribe(result => {
      if (result) {
        this.router.navigate(['/home']);
      }
    })
  }
}
