import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {




  mytele="success";
  myemail="primary";
  mymobile="success";



 
  tele(){
    this.mytele="primary";
    this.myemail="success";
    this.mymobile="success";
  }
  email(){
    this.mytele="success";
    this.myemail="primary";
    this.mymobile="success";

  }
  mobile(){
    this.mytele="success";
    this.myemail="success";
    this.mymobile="primary";

  }


   user={
    email:'',
    password:'',
    name_radio1 : '2'
  }

  constructor(private auth:AuthService, private router:Router,public alertController: AlertController,private translate: TranslateService) { }

  ngOnInit() {
  }

  // signIn(){

  //   console.log("hello i am in Sign iN methos")

  // }


  signIn() {

    console.log(this.user)
   
  
      this.auth.signInn(this.user).subscribe(res => {
            console.log(res)
            if(res.status == 200){

            // this.router.navigateByUrl('/action/first')

            //     this.alertController.create({
            //       header: 'Alert',
            //       subHeader: 'Subtitle',
            //       message: 'This is an alert message.',
            //       buttons: ['OK']
            //     }).then(a=> {
            //       a.present();
            //     });
                              
            
              console.log( "Success "+ res.message);
            } else if(res.status == 301) {
              console.log( "Failiure" +res.message);
            } else{

              this.alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'Please enter Valid User name and password',
                buttons: ['OK']
              }).then(a=> {
                a.present();
              });
              console.log("you are not user " + res.message);
            }
           
    });
  }

}
