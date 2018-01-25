var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowroomPage } from '../showroom/showroom';
import { SchedulePage } from '../schedule/schedule';
import { SalesexecutivePage } from '../salesexecutive/salesexecutive';
import { DiagnosisPage } from '../diagnosis/diagnosis';
import { BodyworkPage } from '../bodywork/bodywork';
import { ServicePage } from '../service/service';
import { MechanicalrepairPage } from '../mechanicalrepair/mechanicalrepair';
import { ProductsPage } from '../products/products';
import { QuotationPage } from '../quotation/quotation';
import { AuthPage } from '../../service/authpage';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authpage) {
        this.navCtrl = navCtrl;
        this.authpage = authpage;
        this.showroom = ShowroomPage;
        this.schedule = SchedulePage;
        this.salesexecutive = SalesexecutivePage;
        this.diagnosis = DiagnosisPage;
        this.bodywork = BodyworkPage;
        this.service = ServicePage;
        this.mechanicalrepair = MechanicalrepairPage;
        this.products = ProductsPage;
        this.quotation = QuotationPage;
        this.authpage.showauth();
    }
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, AuthPage])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map