import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ){}

  ngOnInit() {
    this.peliculas=this.peliculaService.getPeliculas();
  }

  irDetallePelicula(id: number){
    this.router.navigate([`main/detalle-pelicula/${id}`]);
  }

}
