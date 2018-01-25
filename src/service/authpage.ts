import { Injectable } from '@angular/core'
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { SigninPage } from '../pages/signin/signin';
import {HomePage } from '../pages/home/home';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { User } from '../models/user.model';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthPage{
	page = false;
	datas = {email: 'demo@mail.com', password: 'raymond'};
	url = 'http://elizade.gratisbuzz.com/login';
	password = 'raymond';
	email = 'demo@mail.com';
	users: User;
	auth = false;
	token: any;



	constructor(private http: Http, private storage: Storage) {
		
	 }


	

	showauth(){

		// let headers = new Headers();
		// headers.append('Access-Control-Allow-Origin' , '*');
	 //    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
	 //    headers.append('Accept','application/json');
	 //    headers.append('content-type','application/json');
		// let options = new RequestOptions({ headers: headers,withCredentials: true });

		// return this.http.post('http://elizade.gratisbuzz.com/login', {email: 'demo@mail.com', password: 'raymond'}, options).map(data => data.json()).subscribe(data => {
  //       console.log(data)
  //   	},err =>{console.log(err) })
		  	// this.users =  {
		   //          id: 1,
		   //          email: "demo@mail.com",
		   //          customer_number: "CUST013643",
		   //          created_at: "2017-12-19 08:29:03",
		   //          updated_at: "-0001-11-30 00:00:00",
		   //          token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOm51bGwsImV4cCI6MTUxNjg3NjgwMywiaWF0IjoxNTE2MDEyODAzLCJzdWIiOjF9.rpu6ngAlZ0iCVUbOsN3B2Lzsa-uTYtmb3IxsSAf8L_A"
		   //      }		
    	// 	this.storage.set('user', this.users);


	}
}