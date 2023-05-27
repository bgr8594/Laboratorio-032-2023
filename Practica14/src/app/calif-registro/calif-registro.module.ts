import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalifRegistroPageRoutingModule } from './calif-registro-routing.module';

import { CalifRegistroPage } from './calif-registro.page';
import { CalifcompComponent } from '../califcomp/califcomp.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalifRegistroPageRoutingModule
  ],
  declarations: [CalifRegistroPage, CalifRegistroPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CalifRegistroPageModule {}
