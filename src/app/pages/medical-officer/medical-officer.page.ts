import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MedicalComComponent } from 'src/app/medical-com/medical-com.component';

@Component({
  selector: 'app-medical-officer',
  templateUrl: './medical-officer.page.html',
  styleUrls: ['./medical-officer.page.scss'],
})
export class MedicalOfficerPage implements OnInit {

  constructor(private modalctrl:ModalController) { }
  async showModal(id){
    console.log("i am clicked")
    const i = id;
    const modal1=await this.modalctrl.create({
      component: MedicalComComponent,
      componentProps : {
        'id' : i
      }
    })
    await modal1.present();

  }

  ngOnInit() {
  }


}
