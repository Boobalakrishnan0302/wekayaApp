import { Component, OnInit } from '@angular/core';
import { Router,RouterEvent } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {

  selectedPath=''
  pages=[
    {
      title:'Home',
      url:'/action/first'
    },
    {
      title:'Products',
      url:'/action/second'
    },
    {
      title:'OrderForm',
      url:'/action/third'
    },
    {
      title:'PaymentMethod',
      url:'/action/four'
    },
    {
      title:'MedicalOfficer',
      url:'/action/five'
    },
    {
      title:'Settings',
      url:'/action/six'
    }
   
   
  ]

  value1="fasle";

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url){
        this.selectedPath=event.url;
      }
    });
   }

  ngOnInit() {
  }

}
