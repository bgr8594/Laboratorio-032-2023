import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPageRoutingModule } from './calificaciones-routing.module';

import { AlumnosPage } from './calificaciones.page';
import { DatosAlumnoComponent } from '../componentes/datos-alumno/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule
  ],
  declarations: [AlumnosPage, DatosAlumnoComponent]
})
export class AlumnosPageModule {}
