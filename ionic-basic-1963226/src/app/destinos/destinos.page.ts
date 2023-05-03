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
  estado:string="Alta destino";
  editando: boolean=false;

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
      if(!this.editando){
        this.autService.altaLugar(this.lugar).then((e:any)=>{
          this.ionicForm.reset();
          this.autService.getLugares(this.destinos);
        }).catch(e=>{
          console.error(e);
        });        
      } else{
        this.autService.updateLugares(this.lugar.id, this.lugar).then(e=>{
          this.editando= false;
          this.estado = "Alta destino";
          this.lugar = new Lugar();
          this.ionicForm.reset();
          this.autService.getLugares(this.destinos);
        }).catch(e=>{
          console.error(e);
        });
      }
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
  editarLugar(id: any, lugar: any) {
    this.editando = true;
    this.lugar = lugar;
    this.estado = "Editar el lugar";
    this.ionicForm.get('nombre').setValue(lugar.nombre);
  }

  eliminarLugar(id: any) {
    this.estado = "Alta destino";
    this.editando = false;
    this.ionicForm.reset();
    this.autService.deleteLugar(id).then(response=>{
      this.autService.getLugares(this.destinos);     
    }).catch(error=>{});

  }

  cancelarEdicion(){
    this.estado = "Alta destino";
    this.editando = false;
    this.ionicForm.reset();
    this.lugar = new Lugar();
  }   
}
