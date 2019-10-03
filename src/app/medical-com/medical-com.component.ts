import { Component, OnInit,Input } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-medical-com',
  templateUrl: './medical-com.component.html',
  styleUrls: ['./medical-com.component.scss'],
})
export class MedicalComComponent implements OnInit {

  @Input() id : string;
  data : string;
  
  constructor(private modalCtrl:ModalController, private nav : NavParams) {
    this.data = this.nav.get('id');
   }
 
  async close(){
    this.modalCtrl.dismiss();
  }
   

  ngOnInit() {}

}
