import { Injectable} from '@angular/core'; 
import { AlertController, LoadingController} from 'ionic-angular'; 

@Injectable()
export class LoaderService { 
    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController) {
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
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
      }

}