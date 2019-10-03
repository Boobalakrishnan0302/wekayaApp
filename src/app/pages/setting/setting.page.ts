import { Component, OnInit } from '@angular/core';
const LNG_KEY = 'SELECTED_LANGUAGE';
import { Storage } from '@ionic/storage';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  myval;
  mycheck1=false


  constructor(private storage:Storage,private languageservice:LanguageService) { }

 
  


  ngOnInit() {
    this.storage.get(LNG_KEY).then(data => {
      this.myval = data;
       console.log(this.myval +"hi")
      console.log(this.myval+"Its the original value")
      if(this.myval=='en'){
        this.mycheck1=true;
      }
      else{
        this.mycheck1=false;
      }
    });
    }

    changeLanguage1($event){
      
      if(($event.target.name == 'blueberry')){
        if($event.detail.checked){
          this.mycheck1 = true;
          this.storage.set(LNG_KEY,'en');
          this.languageservice.setLanguage('en');
        } else {
          this.mycheck1 = false;
          this.storage.set(LNG_KEY,'de');
        }
      }
      // if(($event.target.name == 'blueberry')){
      //   if($event.detail.checked){
      //     this.storage.set(LNG_KEY,'en').then(() => {
      //       this.mycheck1 = true;
      //     });
      //   } else {
      //     this.storage.set(LNG_KEY,'de').then(() => {
      //       this.mycheck1 = false;
      //     });
      //   }
      // } else {
      //   this.storage.set(LNG_KEY,'de').then(() => {
      //     this.mycheck1 = false;
      //   });
      // }
    }

    changeLanguage2($event){
      if(($event.target.name == 'apple')){
        if($event.detail.checked){
          this.mycheck1 = false;
          this.storage.set(LNG_KEY,'de');
          this.languageservice.setLanguage('de');
        } else {
          this.mycheck1 = true;
          this.storage.set(LNG_KEY,'en');
        }
      }
    }

    
 
   

  }



