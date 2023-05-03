import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { AutService } from '../aut.service';
import { MenuServiceService } from '../menu-service.service';
import{Subscription}from 'rxjs';
import{onAuthStateChanged} from 'firebase/auth';
@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit, OnDestroy {
  titleMenu: string='home';

  public isLoged: any=false;

  public subscription: Subscription=new Subscription();
  datosMenu: Menu[]=[
    {nombre: 'login', enlace:'/login', icono:'log-in-outline'},
  ];
  constructor(
    private autService:AutService,
    private menuService: MenuServiceService,
    private router :Router
  ){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
  });
  this.subscription=this.menuService.$getTitleMenu.subscribe(data=>{console.log(data); this.titleMenu=data;});
}


  ngOnInit() {}

  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.router.navigate([link]);
  }

  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription!= undefined){
      this.subscription.unsubscribe();
    }
  }

  onMenuOpen(){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu=[
          {nombre: 'pelicula', enlace: '/main/pelicula', icono:'restaurant-outline'},
          {nombre: 'presupuesto', enlace:'/main/presupuesto', icono:'cash-outline'},
          {nombre: 'logout', enlace: '/home', icono:'log-out-outline'},
          {nombre: 'inicio', enlace:'/main/inicio', icono:'navigate-outline'},
          {nombre:'logout', enlace:'/main/home', icono: 'log-out-outline'},
          {nombre: 'Turismo', enlace: '/main/destinos', icono:'airplane'},
          {nombre: 'Tabs', enlace:'/main/tabs', icono:'folder-outline'},
        ];
      }
      else{
        this.datosMenu=[
          {nombre: 'login', enlace:'/login', icono:'log-in-outline'}
        ];
      }
    });
  }
}
