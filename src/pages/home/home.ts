import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../sharedMain/apiService';
import { ShareService } from '../../sharedMain/shareService';

import { ProductPage } from '../product/product';
import{TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage : any = TabsPage;

  constructor(
    public navCtrl: NavController,
    private apiRefService : ApiService,
    private shareService :  ShareService,
  ) { }

  stores = {categories : ''};

  ngOnInit() {
    if(localStorage.getItem("token")){
      this.getDataList();
    }
  }

  getDataList() {
    this.apiRefService.getStoresApi()
    .subscribe(data =>{
      console.log(data);
      let orderData : any = data;
      if(data){
        this.stores = orderData;
        //this.navCtrl.push('WelcomePage');
      }else{
        //this.navCtrl.push('WelcomePage');
      }
    }, error => {
        console.log(error);
        //this.showAlert('Error', "Invalid name or password.");
        this.navCtrl.push('WelcomePage');
      });
    }

  openStore(storeChild){
    this.shareService.listData.storeChild = storeChild;
    this.navCtrl.push(ProductPage);
  }


}
