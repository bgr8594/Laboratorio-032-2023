import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../interface/calificacion';
import { CalificacionesService } from '../service/calificaciones.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  calificaciones: Calificacion[] = [];

  constructor(
    private calificacionesService: CalificacionesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.calificaciones = this.calificacionesService.obtenerCalificaciones();

    if (this.calificaciones.length === 0) {
      this.agregarCalificacionEjemplo('Matemáticas', 9);
      this.agregarCalificacionEjemplo('Ciencias', 7);
      this.agregarCalificacionEjemplo('Historia', 5);
    }
  }

  async agregarCalificacion() {
    const alert = await this.alertController.create({
      header: 'Nueva Calificación',
      inputs: [
        {
          name: 'materia',
          type: 'text',
          placeholder: 'Materia'
        },
        {
          name: 'calificacion',
          type: 'number',
          placeholder: 'Calificación'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            const nuevaCalificacion: Calificacion = {
              materia: data.materia,
              calificacion: data.calificacion,
              aprobado: data.calificacion >= 6
            };
            this.calificacionesService.agregarCalificacion(nuevaCalificacion);
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarCalificacion(index: number) {
    this.calificacionesService.eliminarCalificacion(index);
  }

  private agregarCalificacionEjemplo(materia: string, calificacion: number) {
    const nuevaCalificacion: Calificacion = {
      materia,
      calificacion,
      aprobado: calificacion >= 6
    };
    this.calificacionesService.agregarCalificacion(nuevaCalificacion);
  }
}
