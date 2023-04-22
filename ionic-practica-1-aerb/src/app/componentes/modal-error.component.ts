import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modla-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss'],
})
export class ModlaErrorComponent implements OnInit {
  error: string ='';

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
