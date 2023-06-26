
import { Injectable } from '@angular/core';
import { Calificacion, CalInterface } from './calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private calificaciones: Calificacion[] = [];

  constructor() {
  }

  buscarCalificaciones(): Calificacion[] {
    return this.calificaciones;
  }

  alta(calificacion: CalInterface) {
    this.calificaciones.push(new Calificacion(
      calificacion.id,
      calificacion.materia,
      calificacion.calificacion,
      calificacion.aprobado
    ));
  }

  baja(id: number) {
    const index = this.calificaciones.findIndex(c => c.id === id);
    if (index !== -1) {
      this.calificaciones.splice(index, 1);
    }
  }

  cambios(calificacion: Calificacion) {
    const index = this.calificaciones.findIndex(c => c.id === calificacion.id);
    if (index !== -1) {
      this.calificaciones[index] = calificacion;
    }
  }
}
