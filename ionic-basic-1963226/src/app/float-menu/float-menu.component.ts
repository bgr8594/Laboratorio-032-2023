import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {
  datosMenu: Menu[]=[
    {nombre: 'pelicula', enlace: '/pelicula', icono:'restaurant-outline'},
    {nombre: 'presupuesto', enlace:'/presupuesto', icono:'cash-outline'},
    {nombre: 'inicio', enlace:'/inicio', icono:'navigate-outline'},
  ];
  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link:string){
    this.router.navigate([link]);
  }

}
