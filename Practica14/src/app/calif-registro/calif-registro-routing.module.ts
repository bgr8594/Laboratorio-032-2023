import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalifRegistroPage } from './calif-registro.page';

const routes: Routes = [
  {
    path: '',
    component: CalifRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalifRegistroPageRoutingModule {}
