import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShareService } from '../../sharedMain/shareService';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shareService : ShareService,
  ) {
  }

  storesChild = {children : ''};
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.storesChild = this.shareService.listData.storeChild; 
  }



}
