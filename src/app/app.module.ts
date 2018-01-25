import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ShowroomPage } from '../pages/showroom/showroom';
import { SchedulePage } from '../pages/schedule/schedule';
import { SalesexecutivePage } from '../pages/salesexecutive/salesexecutive';
import { DiagnosisPage } from '../pages/diagnosis/diagnosis';
import { BodyworkPage } from '../pages/bodywork/bodywork';
import { ServicePage } from '../pages/service/service';
import { MechanicalrepairPage } from '../pages/mechanicalrepair/mechanicalrepair';
import { ProductsPage } from '../pages/products/products';
import { QuotationPage } from '../pages/quotation/quotation';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { QuotesPage } from '../pages/quotes/quotes';
import { ServicerequestPage } from '../pages/servicerequest/servicerequest';
import { ProductslistPage } from '../pages/productslist/productslist';
import { CarsPage } from '../pages/cars/cars';
import { SettingsPage } from '../pages/settings/settings';
import { ProductPage } from '../pages/product/product';
import {QuotedisplayPage } from '../pages/quotedisplay/quotedisplay'
import { AppointmentdisplayPage } from '../pages/appointmentdisplay/appointmentdisplay';
import { ServicerequestdisplayPage } from '../pages/servicerequestdisplay/servicerequestdisplay'
import { CardisplayPage } from '../pages/cardisplay/cardisplay'
import { AccountsPage } from '../pages/accounts/accounts'
import { ShowquotationPage } from '../pages/showquotation/showquotation'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthPage } from '../service/authpage';
import { Users } from '../service/user.service';
import { formsService } from '../service/formsService.service'
import { Productservice } from '../service/products.service'
import { Car } from '../service/cars.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    ShowroomPage,
    SchedulePage,
    SalesexecutivePage,
    DiagnosisPage,
    BodyworkPage,
    ServicePage,
    MechanicalrepairPage,
    ProductsPage,
    QuotationPage,
    AppointmentsPage,
    QuotesPage,
    ServicerequestPage,
    ProductslistPage,
    CarsPage,
    SettingsPage,
    ProductPage,
    QuotedisplayPage,
    AppointmentdisplayPage,
    ServicerequestdisplayPage,
    CardisplayPage,
    AccountsPage,
    ShowquotationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    ShowroomPage,
    SchedulePage,
    SalesexecutivePage,
    DiagnosisPage,
    BodyworkPage,
    ServicePage,
    MechanicalrepairPage,
    ProductsPage,
    QuotationPage,
    AppointmentsPage,
    QuotesPage,
    ServicerequestPage,
    ProductslistPage,
    CarsPage,
    SettingsPage,
    ProductPage,
    QuotedisplayPage,
    AppointmentdisplayPage,
    ServicerequestdisplayPage,
    CardisplayPage,
    AccountsPage,
    ShowquotationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthPage,
    Users,
    formsService,
    Productservice,
    Car
  ]
})
export class AppModule {}
