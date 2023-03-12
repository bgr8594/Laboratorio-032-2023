import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'alumnos',
        loadChildren : () => import('../alumnos/alumnos.module').then(m=>m.AlumnosPageModule)
      }
      ,
      {
        path: 'recetas',
        loadChildren: () => import('../receta/receta.module').then(m=>m.RecetaPageModule)
      },
      {
        path: 'presupuestos',
        loadChildren: () => import('../presupuesto/presupuestos.module').then(m=>m.PresupuestosPageModule)
      },
      {
        path:'',
        redirectTo: '/tabs/alumnos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/alumnos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}