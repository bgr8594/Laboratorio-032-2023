import { Component, OnInit } from '@angular/core';
import { RegistroCalif } from '../interface/registro-calif';
import { RegistroCalifService } from '../service/registro-calif.service';

@Component({
  selector: 'app-calif-registro',
  templateUrl: './calif-registro.page.html',
  styleUrls: ['./calif-registro.page.scss'],
})
export class CalifRegistroPage implements OnInit {

  nombreMateria: string='';
  calificacion: any|number=0;
  aprobado: boolean=false;
  registros: RegistroCalif[]=[];


  constructor(private registroService: RegistroCalifService) { }

  ngOnInit() {
    this.registros=this.registroService.obtenerRegistros();
  }

  guardar(){
    const nuevoRegistro: RegistroCalif={
      nombreMateria: this.nombreMateria,
      calificacion: this.calificacion,
      aprobado: this.aprobado
    };

    this.registroService.agregarRegistro(nuevoRegistro);
    this.resetForm();
  }

  editar(index: number){
    const registro=this.registros[index];
    this.nombreMateria=registro.nombreMateria;
    this.calificacion=registro.calificacion;
    this.aprobado=registro.aprobado;
    this.eliminar(index);
  }

  eliminar(index: number){
    this.registroService.eliminarRegistro(index);
  }

  resetForm(){
    this.nombreMateria='';
    this.calificacion=0;
    this.aprobado=false;
  }

}
