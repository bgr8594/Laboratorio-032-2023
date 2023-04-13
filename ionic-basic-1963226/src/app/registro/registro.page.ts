import { Component, OnInit } from '@angular/core';
import { AutService } from '../aut.service';
import{Router} from '@angular/router';
import { User } from '../user';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: User = new User();

  constructor(
    private autSvc: AutService,
    private router: Router,
    private menuService: MenuServiceService
  ) { }

  ngOnInit() {
  }


  async onRegistro(){
    this.autSvc.onRegistro(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.menuService.setTitle("presupuesto");
        this.router.navigate(['/presupuesto']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario');
    })
    
  }
  onLogin(){
    this.menuService.setTitle("login");
    this.router.navigate(["/login"]);
  }

}
