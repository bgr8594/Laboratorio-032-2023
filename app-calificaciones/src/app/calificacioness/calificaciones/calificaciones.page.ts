import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CalificacionesService } from 'src/app/services/calificaciones.service';

function calificacionValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const calificacion = control.value;
  if (calificacion < 0 || calificacion > 100) {
    return { 'invalidCalificacion': true };
  }
  return null;
}

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage {
  calificacionForm: FormGroup;
  calificaciones: any[] = [];
  editingIndex: number = -1;
  ModificarForm: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private calificacionesService: CalificacionesService,
  ) {


    this.calificacionForm = this.formBuilder.group({
      materia: ['', Validators.required],
      calificacion: ['', [Validators.required, calificacionValidator]],
      aprobado: [false]
    });
  }

  ionViewWillEnter() {
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }

  agregarCalificacion() {
    if (this.calificacionForm.valid) {
      const calificacion = this.calificacionForm.value;
      if (this.editingIndex !== -1) {
        this.calificaciones[this.editingIndex] = calificacion;
        this.editingIndex = -1;
      } else {
        this.calificacionesService.agregarCalificacion(calificacion);
      }
      this.calificacionForm.reset();
      this.ModificarForm = true;
    }
  }

  editarCalificacion(index: number) {
    const calificacion = this.calificaciones[index];
    this.calificacionForm.patchValue({
      materia: calificacion.materia,
      calificacion: calificacion.calificacion,
      aprobado: calificacion.aprobado
    });
    this.editingIndex = index;
    this.ModificarForm = false;
  }

  eliminarCalificacion(index: number) {
    this.calificacionesService.eliminarCalificacion(index);
  }


}
