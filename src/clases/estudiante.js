export class Estudiante{
    nombre
    identificacion
    sexo
    fechaIngreso
    fechaNacimiento
    notas

    constructor(nombre, identificacion, sexo, fechaIngreso, fechaNacimiento, notas){
        this.nombre = nombre
        this.identificacion = identificacion
        this.sexo = sexo
        this.fechaNacimiento = fechaNacimiento
        this.fechaIngreso = fechaIngreso
        this.notas = notas
    }
}