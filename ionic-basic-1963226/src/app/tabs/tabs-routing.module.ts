import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'pelicula', loadChildren:()=> import('../pelicula/pelicula.module').then(m=>m.PeliculaPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'presupuesto',
        loadChildren: () => import('../presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path:'',
        redirectTo: '/main/tabs/alumnos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/tabs/alumnos',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
