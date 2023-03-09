import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {
    this.peliculas=this.peliculaService.getPeliculas();
  }

}
