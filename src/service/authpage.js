var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
var AuthPage = /** @class */ (function () {
    function AuthPage(http) {
        this.http = http;
        this.page = false;
        this.datas = { email: 'demo@mail.com', password: 'raymond' };
        this.url = 'http://elizade.gratisbuzz.com/login';
        this.password = 'raymond';
        this.email = 'demo@mail.com';
    }
    AuthPage.prototype.showPage = function () {
        if (this.page) {
            return SigninPage;
        }
        return HomePage;
    };
    AuthPage.prototype.showauth = function () {
        // let headers = new Headers();
        // headers.append('Access-Control-Allow-Origin' , '*');
        //    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //    headers.append('Accept','application/json');
        //    headers.append('content-type','application/json');
        // let options = new RequestOptions({ headers: headers,withCredentials: true });
        {
            "id";
            1,
                "email";
            "demo@mail.com",
                "customer_number";
            "CUST013643",
                "created_at";
            "2017-12-19 08:29:03",
                "updated_at";
            "-0001-11-30 00:00:00",
                "token";
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOm51bGwsImV4cCI6MTUxNjg3NjgwMywiaWF0IjoxNTE2MDEyODAzLCJzdWIiOjF9.rpu6ngAlZ0iCVUbOsN3B2Lzsa-uTYtmb3IxsSAf8L_A";
        }
    };
    AuthPage = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AuthPage);
    return AuthPage;
}());
export { AuthPage };
//# sourceMappingURL=authpage.js.map