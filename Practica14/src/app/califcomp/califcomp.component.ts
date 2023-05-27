import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RegistroCalif } from '../interface/registro-calif';
@Component({
  selector: 'app-califcomp',
  templateUrl: './califcomp.component.html',
  styleUrls: ['./califcomp.component.scss'],
})
export class CalifcompComponent  implements OnInit {

  @Input() calificacionList: RegistroCalif[]=[];
  @Output() eliminar: any= new EventEmitter<RegistroCalif[]>();
  @Output() editar: any=new EventEmitter<number>;

  constructor() { }

  ngOnInit() {}

}
