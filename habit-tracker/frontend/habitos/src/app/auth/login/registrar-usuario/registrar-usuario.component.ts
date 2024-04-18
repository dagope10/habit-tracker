import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
 

  register() {
    if(this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      this.authService.registrarUsuario(nombre, email, password).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso', response);
        },
        error: (error) => {
          console.log('Error durante el registro', error);
        }
      })
    
    
    }
  }
}
