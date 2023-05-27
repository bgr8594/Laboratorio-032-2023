import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Calificacion } from '../interface/calificacion';
import { CalificacionesService } from '../service/calificaciones.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss']
})
export class CalificacionesPage implements OnInit {
  calificacionesForm: FormGroup;
  calificaciones: Calificacion[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private calificacionesService: CalificacionesService
  ) {
    this.calificacionesForm = this.formBuilder.group({
      materia: ['', Validators.required],
      calificacion: ['', Validators.required],
      aprobado: [false]
    });
  }

  ngOnInit() {
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }

  agregarCalificacion() {
    if (this.calificacionesForm.valid) {
      const nuevaCalificacion: Calificacion = {
        materia: this.calificacionesForm.value.materia,
        calificacion: this.calificacionesForm.value.calificacion,
        aprobado: this.calificacionesForm.value.aprobado
      };

      this.calificacionesService.agregarCalificacion(nuevaCalificacion);
      this.calificacionesForm.reset();
    }
  }

  borrarCalificacion(calificacion: Calificacion): void {
    this.calificacionesService.borrarCalificacion(calificacion);
  }
}
