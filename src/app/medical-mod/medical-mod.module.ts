import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MedicalComComponent } from '../medical-com/medical-com.component';



@NgModule({
  imports:[CommonModule , IonicModule],
  declarations: [MedicalComComponent],
  exports:[MedicalComComponent],
  entryComponents:[MedicalComComponent]
})
export class MedicalModModule { }
