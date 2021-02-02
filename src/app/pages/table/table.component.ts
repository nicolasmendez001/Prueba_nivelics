import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() usuarios: Array<Usuario>;

    deleteUser(user: Usuario){
    this.usuarios = this.usuarios.filter(item => item !== user);
  }

}
