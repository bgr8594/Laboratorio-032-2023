
import { Injectable } from '@angular/core';
import { Gasto } from '../interface/gasto';

@Injectable({
  providedIn: 'root'
})

export class GastoService {

  gastos: Gasto[]=[];

  constructor() { }
  agregar(gasto: Gasto){
    if(this.gastos.length==0){
      gasto.id = 1;
    } else{
      gasto.id = this.gastos.length + 1;
    }
    this.gastos.push(gasto);
  }

  borrarGasto(gasto: Gasto){
    this.gastos = 
    this.gastos.filter(g => g.id!= gasto.id);
  }

  getGastos(){
    return this.gastos;
  }
}
