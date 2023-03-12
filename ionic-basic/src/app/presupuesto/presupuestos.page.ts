import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gasto';
import { GastoService } from '../gasto.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.page.html',
  styleUrls: ['./presupuestos.page.scss'],
})
export class PresupuestosPage implements OnInit {

  public gastos: string[]=['Alimentos','Recurrente', 'Entretenimiento'];
  public selectedValue: any;
  public monto: number=0;
  public resultados: string='';
  public errResultados: string='light';
  public descripcion: string='';
  public tipoGasto: string='';
  public gastosList: Gasto[]=[];

  constructor(private gastosService: GastoService) { }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: 'Seleccion de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };


  cambioValor(value: any){
    console.log(value);
  }

  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null && this.monto > 0
       && this.descripcion!= ''){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n'+
      'Descricion: '+this.descripcion;
      let gasto: Gasto = {
      descripcion: this.descripcion,
      tipo: this.selectedValue,
      monto: this.monto
    }
      this.gastosService.agregar(gasto);
      this.gastosList = this.gastosService.getGastos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  }

  borrarGasto(gasto: Gasto){
    this.gastosService.borrarGasto(gasto);
    this.gastosList = this.gastosService.getGastos();
  }

}
