import { Injectable } from '@angular/core';
import { Calificacion } from './calificacion';

@Injectable({
  providedIn: 'root',
})
export class CalificacionService {
  calificaciones: Calificacion[] = [];

  constructor() {}

  alta(calificacion: Calificacion) {
    this.calificaciones.push(calificacion);
    console.log('Calificación agregada:', calificacion);
  }

  baja(calificacion: Calificacion) {
    const index = this.calificaciones.indexOf(calificacion);
    if (index !== -1) {
      this.calificaciones.splice(index, 1);
      console.log('Calificación eliminada:', calificacion);
    }
  }

  buscar(materia: string): Calificacion[] {
    return this.calificaciones.filter(
      (calificacion) => calificacion.materia === materia
    );
  }
}
