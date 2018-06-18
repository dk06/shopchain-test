import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ApiService } from '../../sharedMain/apiService';
import { LoaderService } from '../../sharedMain/loaderService';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiRefService : ApiService,
    private loaderService : LoaderService,
  ) {
  }

  account: { first_name : string, phone_no : string, age : string, last_name: string, email: string, password: string, registration_type : string } = {
    first_name: '',
    last_name : '',
    email: '',
    password: '',
    phone_no:'',
    age:'j',
    registration_type : 'user'
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpData : any;
  showAlert : any;
  doSignup(){
    console.log('Register');
    let user  : any = this.account;
    let userd : any = {user, device_id : 'ASDFG', device_type : 'Android'};
    this.apiRefService.signUpApi(userd).subscribe(data=>{
      this.signUpData = data;
      if(this.signUpData.success){
        this.navCtrl.setRoot(WelcomePage);
      }else{
        this.loaderService.showAlert('Error', this.signUpData.message);
        this.navCtrl.setRoot(WelcomePage);
      }
    });
     
  }
}
