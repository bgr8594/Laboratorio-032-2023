import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonesSegmentadosPage } from './botones-segmentados.page';

const routes: Routes = [
  {
    path: '',
    component: BotonesSegmentadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonesSegmentadosPageRoutingModule {}

