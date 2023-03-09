import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  idPelicula: number = 0;
  pelicula: any;

  constructor(
    private peliculaService: PeliculaService,
    private router: Router,
    private activateRouter: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe((paramMap: any)=>{
      this.idPelicula=Number.parseInt(paramMap.get('idPelicula'));
      this.pelicula=this.peliculaService.getPelicula(this.idPelicula);
    });
  }

}
