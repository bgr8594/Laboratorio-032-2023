import { Injectable } from '@angular/core';
import { RegistroCalif } from '../interface/registro-calif';

@Injectable({
  providedIn: 'root'
})
export class RegistroCalifService {
  private registros: RegistroCalif[]=[];
  

  constructor() { 

    this.registros=[
      {
        nombreMateria:'Materia 1',
        calificacion: 90,
        aprobado: true
      },
      {
        nombreMateria:'Materia 2',
        calificacion: 60,
        aprobado: false
      }
    ];

  }

  obtenerRegistros(): RegistroCalif[]{
    return this.registros;
  }

  agregarRegistro(registrto: RegistroCalif){
    this.registros.push(registrto);
  }

  editarRegistro(index: number, registro: RegistroCalif){
    this.registros[index]=registro;
  }

  eliminarRegistro(index: number){
    this.registros.splice(index,1);
  }
}
