import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalificacionesService {
  calificaciones: any[] = [
    { materia: 'Matemáticas', calificacion: 90, aprobado: true },
    { materia: 'Historia', calificacion: 75, aprobado: false },
    { materia: 'Ciencias', calificacion: 85, aprobado: true },
  ];

  constructor() {}

  getCalificaciones() {
    return this.calificaciones;
  }

  agregarCalificacion(calificacion: any) {
    this.calificaciones.push(calificacion);
  }

  eliminarCalificacion(index: number) {
    this.calificaciones.splice(index, 1);
  }
}
