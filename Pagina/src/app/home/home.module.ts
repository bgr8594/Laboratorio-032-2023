import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnoPage } from './alumno.page';
import { DatosAlumnoComponent } from '../componentes/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule
  ],
  declarations: [AlumnoPage,DatosAlumnoComponent]
})
export class AlumnoPageModule {}
