import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionPage } from './action.page';

const routes: Routes = [
  {
    path: '',
    component: ActionPage,
    children:[
      {
        path:'first',
        loadChildren: '../my-home/my-home.module#MyHomePageModule'
      },
      {
        path:'second',
        loadChildren: '../product/product.module#ProductPageModule'
      },
    
      {
        path:'third',
        loadChildren: '../order-form/order-form.module#OrderFormPageModule'
      },
      {
        path:'four',
        loadChildren:'../payment-order/payment-order.module#PaymentOrderPageModule'
      },
      {
        path:'five',
        loadChildren:'../medical-officer/medical-officer.module#MedicalOfficerPageModule'
      },
      {
        path:'six',
        loadChildren:'..//setting/setting.module#SettingPageModule'
      }


    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionPage]
})
export class ActionPageModule {}
