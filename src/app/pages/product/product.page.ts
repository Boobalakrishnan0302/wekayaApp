import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private alertcontrol1:AlertController) { }

  async presentAlert() {
    const alert = await this.alertcontrol1.create({
      header: 'Payment Method',
      subHeader: 'Subtitle',
      // message: ' <ion-checkbox></ion-checkbox> Online PayMent <br> <ion-checkbox></ion-checkbox> Cash On Delivery',
      message: '<ion-radio-group> <ion-radio> </ion-radio> Online Method <br> <br>  <ion-radio> </ion-radio> Cash on Delivery </ion-radio>',
      buttons: ['OK']
    });
 

    await alert.present();
  }

  ngOnInit() {
  }


}
