import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrl: './pagprincipal.component.css'
})
export class PagprincipalComponent {
  username: string | null;

  constructor(){
    this.username = localStorage.getItem('user_email');
  }

}
