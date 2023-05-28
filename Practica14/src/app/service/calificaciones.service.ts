import { Injectable } from '@angular/core';
import { Calificacion } from '../interface/calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private calificaciones: Calificacion[] = [];

  constructor() {}

  obtenerCalificaciones(): Calificacion[] {
    return this.calificaciones;
  }

  agregarCalificacion(calificacion: Calificacion): void {
    this.calificaciones.push(calificacion);
  }

  eliminarCalificacion(index: number): void {
    this.calificaciones.splice(index, 1);
  }
}
