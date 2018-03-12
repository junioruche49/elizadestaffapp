import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
import { CreatecarPage } from '../pages/createcar/createcar'
import { ShowvehiclePage } from '../pages/showvehicle/showvehicle'
import { ViewvehiclePage } from '../pages/viewvehicle/viewvehicle'
import { FeedbackPage } from '../pages/feedback/feedback'
import { FeedbackviewPage } from '../pages/feedbackview/feedbackview'
import { ViewfeedbackPage } from '../pages/viewfeedback/viewfeedback'
import { Home1Page } from '../pages/home1/home1'
import { Home2Page } from '../pages/home2/home2'
import { Home3Page } from '../pages/home3/home3'
import { VehiclemodelsPage } from '../pages/vehiclemodels/vehiclemodels'
import { ShowvehiclehomePage } from '../pages/showvehiclehome/showvehiclehome'
import { ViewvehiclehomePage } from '../pages/viewvehiclehome/viewvehiclehome'
import { FeedbackhomePage } from '../pages/feedbackhome/feedbackhome'
import { SparepartPage } from '../pages/sparepart/sparepart'
import { SpareparthomePage } from '../pages/spareparthome/spareparthome'
import { DescriptiontypePage } from '../pages/descriptiontype/descriptiontype'
import { SparepartviewPage } from '../pages/sparepartview/sparepartview'
import { ServicehomePage } from '../pages/servicehome/servicehome'
import { MaintenancePage } from '../pages/maintenance/maintenance'
import { VehiclerecoveryPage } from '../pages/vehiclerecovery/vehiclerecovery'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { AuthPage } from '../service/authpage';
import { Users } from '../service/user.service';
import { formsService } from '../service/formsService.service'
import { Productservice } from '../service/products.service'
import { Car } from '../service/cars.service'
import { Vehicle } from '../service/vehicle.service'
import { LocationProvider } from '../providers/location/location';

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
    ShowquotationPage,
    CreatecarPage,
    ShowvehiclePage,
    ViewvehiclePage,
    FeedbackPage,
    FeedbackviewPage,
    ViewfeedbackPage,
    Home1Page,
    Home2Page,
    Home3Page,
    VehiclemodelsPage,
    ShowvehiclehomePage,
    ViewvehiclehomePage,
    FeedbackhomePage,
    SparepartPage,
    SpareparthomePage,
    DescriptiontypePage,
    SparepartviewPage,
    ServicehomePage,
    MaintenancePage,
    VehiclerecoveryPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
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
    ShowquotationPage,
    CreatecarPage,
    ShowvehiclePage,
    ViewvehiclePage,
    FeedbackPage,
    FeedbackviewPage,
    ViewfeedbackPage,
    Home1Page,
    Home2Page,
    Home3Page,
    VehiclemodelsPage,
    ShowvehiclehomePage,
    ViewvehiclehomePage,
    FeedbackhomePage,
    SparepartPage,
    SpareparthomePage,
    DescriptiontypePage,
    SparepartviewPage,
    ServicehomePage,
    MaintenancePage,
    VehiclerecoveryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthPage,
    Users,
    formsService,
    Productservice,
    Car,
    CallNumber,
    LocationProvider,
    Vehicle
  ]
})
export class AppModule {}
