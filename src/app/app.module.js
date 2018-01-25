var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthPage } from '../service/authpage';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                SettingsPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                HttpModule
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
                SettingsPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthPage
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map