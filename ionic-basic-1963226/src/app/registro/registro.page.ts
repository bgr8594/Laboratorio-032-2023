import { Component, OnInit } from '@angular/core';
import { AutService } from '../aut.service';
import{Router} from '@angular/router';
import { User } from '../user';
import { MenuServiceService } from '../menu-service.service';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalErrorComponent } from '../modal-error/modal-error.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: User = new User();
  formRegister: any;

  constructor(
    private autSvc: AutService,
    private router: Router,
    private menuService: MenuServiceService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.buildForm();
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
      if(error.code=='auth/email-already-in-use'){
        this.openModal(error);
      }
      console.log(error.code);
    })
    
  }
  onLogin(){
    this.menuService.setTitle("login");
    this.router.navigate(["/login"]);
  }
  submitForm(){
    if(this.formRegister.valid){
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.onRegistro();
    }
  }

  ionViewWillEnter(){
    this.formRegister.reset();
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.formRegister.controls[controlName].valid &&
			this.formRegister.controls[controlName].hasError(errorName) &&
			this.formRegister.controls[controlName].touched;
	}

  buildForm(){
    this.formRegister = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Error al crear el usuario'
      }
    });
    return await modal.present();
  }  

}
