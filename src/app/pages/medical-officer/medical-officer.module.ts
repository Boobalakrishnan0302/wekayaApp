import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalOfficerPage } from './medical-officer.page';
import { MedicalModModule } from 'src/app/medical-mod/medical-mod.module';


const routes: Routes = [
  {
    path: '',
    component: MedicalOfficerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MedicalModModule
  ],
  declarations: [MedicalOfficerPage]
})
export class MedicalOfficerPageModule {}
