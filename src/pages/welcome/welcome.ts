import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { SignupPage } from '../signup/signup';

//import { ShareService } from '../../sharedMain/shareService';
import { ApiService } from '../../sharedMain/apiService';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiRefService : ApiService,
  ) {
  }

  registerCredentials = { email: '', password: '' };

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loginData : any;
  login(){
    console.log(this.registerCredentials);
    this.apiRefService.loginApi(this.registerCredentials).subscribe(data=>{
        const userInfo = data;
        if(userInfo.success){
          localStorage.setItem('token', userInfo.user.token);
          this.navCtrl.setRoot(HomePage);
        }else{
          //this.navCtrl.setRoot('WelcomePage');
        }
    });
  }

  createAccount(){
      this.navCtrl.push(SignupPage);
  }

}
