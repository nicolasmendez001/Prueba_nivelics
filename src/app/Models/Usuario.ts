export class Usuario {
    nombres_apellidos: string;
    email: string;
    genero: string;
    edad: number;
    telefono: string;
    fecha_registro: string;

    constructor(nombres_apellidos?: string, email?: string, genero?: string, edad?: number, telefono?: string, fecha_registro?: string) {
        this.nombres_apellidos = nombres_apellidos;
        this.email = email;
        this.genero = genero;
        this.edad = edad;
        this.telefono = telefono;
        this.fecha_registro = fecha_registro;
    }
}