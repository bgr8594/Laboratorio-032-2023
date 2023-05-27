import { Component, OnInit } from '@angular/core';
import { RegistroCalif } from '../interface/registro-calif';
import { RegistroCalifService } from '../service/registro-calif.service';

@Component({
  selector: 'app-calif-registro',
  templateUrl: './calif-registro.page.html',
  styleUrls: ['./calif-registro.page.scss'],
})
export class CalifRegistroPage implements OnInit {

    calificacion: RegistroCalif[]=[];
    materia: string='';
    calif: number=0;
    idActual: any|number=0;
    error:boolean=false;
    estado: string='';
  
  constructor(private registroService: RegistroCalifService) { }

  ngOnInit() {
    this.registroService.setCalif([
      {id: 1, materia: 'Materia 1', calificacion: 90},
      {id: 2, materia: 'materia 2', calificacion: 80}
    ]);
    this.calificacion=this.registroService.getCalif();
    this.estado='guardar';
  }
  
  public guardar(){
    if( (this.materia == undefined || this.materia == '' ) || 
      (this.calif == undefined || this.calif == 0) ) {
      this.error = true;
      return;
    }  
    let calificacion: RegistroCalif={
      materia: this.materia,
      calificacion: this.calif
    };
    if (this.estado ==='actualizar'){
      calificacion.id = this.idActual;
      this.calificacion = this.registroService.actualiza(calificacion);
    }
    if(this.estado === 'guardar'){
      this.registroService.agregarCalif(calificacion);
      this.calificacion = this.registroService.getCalif();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.materia = '';
    this.calif = 0;
    this.error = false;
  }

  public eliminar(id:number){
    this.registroService.eliminarCalif(id);
    this.calificacion = this.registroService.getCalif();
  }

  public editar(cal:RegistroCalif){
    this.estado = 'actualizar';
    this.materia = cal.materia;
    this.calif = cal.calificacion;
    this.idActual = cal.id;
  }

}
