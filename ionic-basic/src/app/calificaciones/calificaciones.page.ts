import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage {
  calificaciones: Calificacion[] = [];
  calificacionForm: FormGroup ;
  editarIndex: number = -1;
  alumnosRegistrados: Calificacion[] = [
    { materia: 'Geografía', calificacion: 100, aprobado: true },
    { materia: 'Química', calificacion: 77, aprobado: true },
    { materia: 'Cálculo', calificacion: 65, aprobado: false },
    { materia: 'Base de datos', calificacion: 60, aprobado: false },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private calificacionService: CalificacionService
  ) {
    this.calificacionForm = this.formBuilder.group({
      materia: ['', Validators.required],
      calificacion: ['', Validators.required],
      aprobado: [false],
    });
  }

  ionViewDidEnter() {
    this.actualizarCalificaciones();
  }

  altaCalificacion(): void {
    if (this.calificacionForm.valid) {
      const nuevaCalificacion: Calificacion = {
        materia: this.calificacionForm.value.materia,
        calificacion: this.calificacionForm.value.calificacion,
        aprobado: this.calificacionForm.value.aprobado,
      };

      if (this.editarIndex > -1) {
        this.calificacionService.cambios(this.editarIndex, nuevaCalificacion);
        this.editarIndex = -1;
      } else {
        this.calificacionService.alta(nuevaCalificacion);
      }

      this.actualizarCalificaciones();
      this.calificacionForm.reset();
    }
  }

  editarCalificacion(index: number): void {
    const calificacion = this.calificaciones[index];
    this.calificacionForm.patchValue({
      materia: calificacion.materia,
      calificacion: calificacion.calificacion,
      aprobado: calificacion.aprobado,
    });
    this.editarIndex = index;
  }

  borrarCalificacion(index: number): void {
    this.calificacionService.baja(index);
    this.actualizarCalificaciones();
  }

  private actualizarCalificaciones(): void {
    this.calificaciones = this.calificacionService.buscar();
  }
}