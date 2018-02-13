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
import { FeedbackPage } from '../pages/feedback/feedback'
import { AuthPage } from '../service/authpage'
import { User } from '../models/user.model';
import { LocationProvider } from '../providers/location/location'
import { Users } from '../service/user.service'
import { Car } from '../service/cars.service'
import { Productservice } from '../service/products.service'
import { FeedbackviewPage } from '../pages/feedbackview/feedbackview'
import { Home1Page } from '../pages/home1/home1'
import { Home2Page } from '../pages/home2/home2'
import { Home3Page } from '../pages/home3/home3'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  page = false;
  MainPage: any;
  user: Promise<string>;

  pages: Array<{title: string, component: any, icon: any}>;

  rootPage: any;
  User: any;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              public authpage: AuthPage, 
              private storage: Storage,
              private toast: ToastController,
              private loadingCtrl: LoadingController,
              private location: LocationProvider,
              public users: Users
              ) {
            console.log(this.location.location);
    

    var loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();

    this.storage.get('user')
      .then(user => {
        loader.dismiss();
        if(user){
          this.users.addUser(user);
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
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Home 2', component: Home1Page, icon: 'home' },
      { title: 'Home 3', component: Home2Page, icon: 'home' },
      { title: 'Home 4', component: Home3Page, icon: 'home' },
      { title: 'Appiontments History', component: AppointmentsPage, icon: 'contacts'},
      { title: 'Quotes', component: QuotesPage, icon: 'list-box' },
      { title: 'Service/Repairs History', component: ServicerequestPage, icon: 'construct' },
      { title: 'Vehicle Model', component: ProductsPage, icon: 'search' },
      { title: 'Cars', component: CarsPage, icon: 'car' },
      { title: 'Feedback', component: FeedbackviewPage, icon: 'chatbubbles' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' }
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
