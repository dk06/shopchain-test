import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { AlertController, LoadingController} from 'ionic-angular';


@Injectable()
export class ApiService { 
    constructor(
        public http: Http,
        private alertCtrl: AlertController, 
        private loadingCtrl: LoadingController) {
    }
    loading: any;

    showLoading() {
        this.loading = this.loadingCtrl.create({
          content: 'Please wait...',
          dismissOnPageChange: true
        });
        this.loading.present();
      }
    
      showAlert(title, text) {
        //this.loading.dismiss();
     
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
      }
    resData : any;
    baseUrl : string = "http://localhost:8100/api/v1";
    headers = new Headers({ 
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'    
    });
    options : any = new RequestOptions({ headers: this.headers });

    loginApi(param){
        //this.showLoading();
       return this.http.post(this.baseUrl + '/sessions/', param).map((res: Response)=>{
        this.resData = res;
            return JSON.parse(this.resData._body);
       });
    }

    signUpApi(param){
        //this.showLoading();
        return this.http.post(this.baseUrl + '/registrations/', param , this.options).map((res: Response)=>{
            this.resData = res;
            return JSON.parse(this.resData._body);
       });
    }

    getStoresApi(){
        //this.showLoading();
        return this.http.get(this.baseUrl + '/stores/1/', this.options).map((res: Response)=>{
            this.resData = res;
            return JSON.parse(this.resData._body);
       });
    }
}