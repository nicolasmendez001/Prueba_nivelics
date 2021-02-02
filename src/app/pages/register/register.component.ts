import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario;
  genders = ['Masculino', 'Femenino', 'Otro'];
  usuarios: Array<Usuario>;

  createFormGroup() {
    return new FormGroup({
      nombres_apellidos: new FormControl(this.usuario.nombres_apellidos, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
      edad: new FormControl(this.usuario.edad, [Validators.required, Validators.maxLength(3)]),
      genero: new FormControl(this.usuario.genero, [Validators.required]),
      telefono: new FormControl(this.usuario.telefono, [Validators.required, Validators.minLength(10)]),
      fecha_registro: new FormControl(this.usuario.fecha_registro, [Validators.required])
    })
  }

  userForm: FormGroup;

  constructor() {
    this.usuario = new Usuario();
    this.usuario.fecha_registro = new Date().toLocaleString();

    this.userForm = this.createFormGroup();

    this.usuarios = new Array<Usuario>();
    this.usuarios.push(new Usuario("Juan camilo Hernandez", "juan.hernandez@gmail.com", "Masculino", 21, "3112547689", new Date().toLocaleString()),
      new Usuario("Laura Fernandez", "laura.fernandez@gmail.com", "Femenino", 34, "3201234506", new Date().toLocaleString()),
      new Usuario("Diana perez", "diana.perez@hotmail.com", "Femenino", 19, "3101332806", new Date().toLocaleString()));
  }

  ngOnInit(): void {
  }

  get nombres_apellidos() { return this.userForm.get('nombres_apellidos'); }
  get email() { return this.userForm.get('email'); }
  get edad() { return this.userForm.get('edad'); }
  get genero() { return this.userForm.get('genero'); }
  get telefono() { return this.userForm.get('telefono'); }

  onResetForm() {
    this.userForm.reset();
  }
  onSaveForm() {
    this.usuario.fecha_registro = new Date().toLocaleString();
    this.usuarios.push(this.usuario);

    this.usuario = new Usuario();
  }

}
