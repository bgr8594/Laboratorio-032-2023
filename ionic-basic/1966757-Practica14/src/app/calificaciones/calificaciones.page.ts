
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalificacionesService } from '../calificaciones-service.service';
import { Calificacion,CalInterface } from '../calificacion';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  calificaciones: Calificacion[] = [];
  calificacionForm: FormGroup;
  modoEdicion = false;
  calificacionActual: Calificacion | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private calificacionesService: CalificacionesService
  ) {
    this.calificacionForm = this.formBuilder.group({
      materia: ['', Validators.required],
      calificacion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.calificaciones = this.calificacionesService.buscarCalificaciones();
  }

  altaCalificacion() {
    if (this.calificacionForm.valid) {
      const calificacion: CalInterface = {
        id: this.generarId(),
        materia: this.calificacionForm.value.materia,
        calificacion: this.calificacionForm.value.calificacion,
        aprobado: this.calificacionForm.value.calificacion >= 70
      };
      this.calificacionesService.alta(calificacion);
      this.limpiarFormulario();
    }
  }

  bajaCalificacion(id: number) {
    this.calificacionesService.baja(id);
  }

  editarCalificacion(calificacion: Calificacion) {
    this.modoEdicion = true;
    this.calificacionActual = calificacion;
    this.calificacionForm.patchValue({
      materia: calificacion.materia,
      calificacion: calificacion.calificacion
    });
  }

  guardarCambios() {
    if (this.calificacionForm.valid && this.calificacionActual) {
      const calificacionModificada = new Calificacion(
        this.calificacionActual.id,
        this.calificacionForm.value.materia,
        this.calificacionForm.value.calificacion,
        this.calificacionForm.value.calificacion >= 6
      );
      this.calificacionesService.cambios(calificacionModificada);
      this.modoEdicion = false;
      this.limpiarFormulario();
    }
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.limpiarFormulario();
  }

  private generarId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  private limpiarFormulario() {
    this.calificacionForm.reset();
  }
}

