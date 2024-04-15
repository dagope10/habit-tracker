import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { jwtDecode }from 'jwt-decode';
import {CommonModule} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrl: './pagprincipal.component.css'
})
export class PagprincipalComponent implements OnInit {
  username: string | null = '';
  habitos: any;
  id: string | null = '';

  constructor(private http: HttpClient, private cookieService: CookieService){
    //El siguiente código es para el html de la página principal:
// src="{{ habito.medalla }}" alt="Medalla" style="width: 30px; height: 30px;
   
   
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.id = localStorage.getItem('id');
    if (this.id) {
      console.log('El id es: '+ this.id);

        this.http.get(`http://localhost:3000/habitos/${this.id}`).subscribe((habitos: any) => {
          console.log(habitos);
          this.habitos = habitos;
        });
      
    }
  }
}
