import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglemapsComponent } from '../componentes/googlemaps/googlemaps.component';
import { IonicModule } from '@ionic/angular';

import { DestinosPageRoutingModule } from './destinos-routing.module';

import { DestinosPage } from './destinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DestinosPage, GooglemapsComponent]
})
export class DestinosPageModule {}