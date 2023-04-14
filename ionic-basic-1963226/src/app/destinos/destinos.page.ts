import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Lugar } from '../lugar';
import { AutService } from '../aut.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
})
export class DestinosPage implements OnInit {
  lugar: Lugar=new Lugar();
  destinos: any[]=[];
  ionicForm: any;

  constructor(
    private autService: AutService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.autService.getLugares(this.destinos);
  }
  ionViewWillEnter(){
    this.autService.getLugares(this.destinos);
  }
  altaLugar(){
    this.autService.altaLugar(this.lugar);
    this.autService.getLugares(this.destinos);
    this.ionicForm.reset();
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.lugar.nombre = this.ionicForm.get('nombre').value;
      this.altaLugar();
    }
  }

  buildForm(){
    this.ionicForm = this.formBuilder.group({
      nombre: new FormControl('',{validators: [Validators.required]})
    });
  }  

  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  }   
}
