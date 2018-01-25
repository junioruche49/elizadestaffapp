import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { QuotesPage } from '../pages/quotes/quotes';
import { ServicerequestPage } from '../pages/servicerequest/servicerequest';
import { ProductsPage } from '../pages/products/products';
import { CarsPage } from '../pages/cars/cars';
import { SettingsPage } from '../pages/settings/settings';
import { SigninPage } from '../pages/signin/signin';
import { AuthPage } from '../service/authpage'
import { User } from '../models/user.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  page = false;
  MainPage: any;
  user: Promise<string>;

  pages: Array<{title: string, component: any}>;

  rootPage: any;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              public authpage: AuthPage, 
              private storage: Storage,
              private toast: ToastController,
              private loadingCtrl: LoadingController,
              ) {
    
    // const toasts = this.toast.create({
    //   message: 'loading the authentication',
    //   duration: 4500,
    //   position: 'bottom'
    // })
    // toasts.present();

    // const user = this.authpage.showPage().then((data: User) => {
    //    toasts.dismiss()
    //   return data;
     
    // }).catch((err) =>{
    //   return err;
    // });
    // this.user = user;
    // this.user.then((data)=>{
    //   this.page = true;
    //   console.log(data);
    // })

    // const value = this.authpage.showPage();
    // console.log(value);

    var loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();

    this.storage.get('user')
      .then(user => {
        loader.dismiss();
        if(user){
          this.rootPage = HomePage;
        }else{
          this.rootPage = SigninPage;
        }
      }).catch(err => {
        loader.dismiss();
        this.rootPage = SigninPage;
      })
    

    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Appiontments History', component: AppointmentsPage },
      { title: 'Quotes', component: QuotesPage },
      { title: 'Service/Repairs History', component: ServicerequestPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Cars', component: CarsPage },
      { title: 'Settings', component: SettingsPage }
    ];
    

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
  }
  logout(){
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    })
    this.storage.get('user').then((val : User) => {
      console.log(val);
  });

    this.nav.setRoot(SigninPage);
  }
}
