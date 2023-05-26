import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalifRegistroPageRoutingModule } from './calif-registro-routing.module';

import { CalifRegistroPage } from './calif-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalifRegistroPageRoutingModule
  ],
  declarations: [CalifRegistroPage]
})
export class CalifRegistroPageModule {}
