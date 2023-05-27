import { Injectable } from '@angular/core';
import { RegistroCalif } from '../interface/registro-calif';

@Injectable({
  providedIn: 'root'
})
export class RegistroCalifService {
  private registros: RegistroCalif[]=[];
  

  constructor() { }
  public agregarCalif(calificacion: RegistroCalif){
    if(this.registros.length>0){
      calificacion.id=this.registros.length+1;
    }else{
      calificacion.id=1;
    }
    this.registros.push(calificacion);
  }
  public eliminarCalif(id:number){
    this.registros=this.registros.filter((cal=>cal.id!=id));
  }
  public getCalif():RegistroCalif[]{
    return this.registros;
  }
  public setCalif(calificacion: RegistroCalif[]){
    this.registros=calificacion;
  }
  public actualiza(calificacion: RegistroCalif){
    this.registros.filter(
      (cal)=>cal.id==calificacion.id).map(cal=>{cal.materia=calificacion.materia; cal.calificacion=calificacion.calificacion;});
      return this.registros;
  }



}
