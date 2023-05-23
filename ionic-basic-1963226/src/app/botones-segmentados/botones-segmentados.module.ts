import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonesSegmentadosPageRoutingModule } from './botones-segmentados-routing.module';

import { BotonesSegmentadosPage } from './botones-segmentados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonesSegmentadosPageRoutingModule
  ],
  declarations: [BotonesSegmentadosPage]
})
export class BotonesSegmentadosPageModule {}

