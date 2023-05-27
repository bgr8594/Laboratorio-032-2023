import { Injectable } from '@angular/core';
import { Calificacion } from '../interface/calificacion';

@Injectable({
  providedIn: 'root',
})
export class CalificacionesService {
  calificaciones: Calificacion[] = [];

  agregarCalificacion(calificacion: Calificacion) {
    this.calificaciones.push(calificacion);
  }

  borrarCalificacion(calificacion: Calificacion) {
    const index = this.calificaciones.indexOf(calificacion);
    if (index !== -1) {
      this.calificaciones.splice(index, 1);
    }
  }

  getCalificaciones(): Calificacion[] {
    return this.calificaciones;
  }
}
