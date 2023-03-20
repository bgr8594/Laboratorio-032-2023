import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    path: 'detalle-pelicula',
    loadChildren: () => import('./detalle-pelicula/detalle-pelicula.module').then( m => m.DetallePeliculaPageModule)
  },
  {
    path: 'pelicula',
    loadChildren: () => import('./pelicula/pelicula.module').then( m => m.PeliculaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'receptor',
    loadChildren: () => import('./receptor/receptor.module').then( m => m.ReceptorPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

