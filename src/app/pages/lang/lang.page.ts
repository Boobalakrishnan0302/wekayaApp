import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Storage } from '@ionic/storage';
const LNG_KEY = 'SELECTED_LANGUAGE';


@Component({
  selector: 'app-lang',
  templateUrl: './lang.page.html',
  styleUrls: ['./lang.page.scss'],
})
export class LangPage implements OnInit {
  languages = [];
  selected = '';

  constructor(private languageser:LanguageService,private storage:Storage) { }

  ngOnInit() {
    this.languages=this.languageser.getLanguages();
    this.selected = this.languageser.selected;
  }

  select(lng) {
    this.storage.set(LNG_KEY,lng);
    console.log(lng)
    this.storage.get(LNG_KEY).then(data=>{
      console.log(data);
    })
    this.languageser.setLanguage(lng);
    
  }

}
