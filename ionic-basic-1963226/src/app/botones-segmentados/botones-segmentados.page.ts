import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones-segmentados',
  templateUrl: './botones-segmentados.page.html',
  styleUrls: ['./botones-segmentados.page.scss'],
})
export class BotonesSegmentadosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev:any){
    console.log('Segment changed', ev);
  }

}
