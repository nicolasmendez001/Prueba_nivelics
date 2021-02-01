import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

}
