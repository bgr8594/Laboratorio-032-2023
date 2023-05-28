import { Component } from '@angular/core';
import { Calificacion } from './calificacion';
import { CalificacionService } from './calificacion.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
})
export class CalificacionPage {
  materia: string = ''; // Inicializamos la propiedad materia
  calificacion: number = 0;
  aprobado: boolean = false; // Inicializamos la propiedad aprobado

  constructor(private calificacionService: CalificacionService) {}

  agregarCalificacion() {
    const calificacion: Calificacion = {
      materia: this.materia,
      calificacion: this.calificacion,
      aprobado: this.aprobado,
    };

    this.calificacionService.alta(calificacion);

    this.materia = '';
    this.calificacion = 0;
    this.aprobado = false;
  }
}

