import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{TabsPage} from '../pages/tabs/tabs';
import { WelcomePage} from '../pages/welcome/welcome';

@Component({
  templateUrl : 'app.html'
  // template: `<ion-menu [content]="content">
  //   <ion-header>
  //     <ion-toolbar>
  //       <ion-title>Pages</ion-title>
  //     </ion-toolbar>
  //   </ion-header>

  //   <ion-content>
  //     <ion-list>
  //       <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
  //         {{p.title}}
  //       </button>
  //     </ion-list>
  //   </ion-content>

  // </ion-menu>
  // <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any;
  
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    // this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Stores', component: HomePage },
      { title: 'List', component: ListPage },
      { title : 'LogOut' , component : WelcomePage}
    ];
  }

  ngOnInit(){
     if(localStorage.getItem("token")){
       this.rootPage = TabsPage;
     }
     else
       this.rootPage = WelcomePage;
   }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    if(page.title == 'LogOut'){
      localStorage.removeItem('token');
    }
  }
}
