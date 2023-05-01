import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../personaje';
import { EnvioReceptorService } from '../envio-receptor.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Alex Cruz', uuid:"85416548765186213564612", email:"alex@gmail.com"},
    {name:'Checo Perez', uuid:"101010102930127308122", email:"checo@gmail.com"}
  ];

  constructor(
    private router: Router,
    private envioReceptor: EnvioReceptorService
  ) { }

  ngOnInit() {
  }

  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/main/receptor']);
  }
}

