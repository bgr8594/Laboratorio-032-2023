import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
      {
        path: 'alumnos',
        loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.AlumnosPageModule)
      }   
  ,
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
