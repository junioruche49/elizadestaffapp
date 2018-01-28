import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
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



	constructor(private http: HttpClient, private storage: Storage) {
		
	 }


	

	authentic(user:string, password: string){

		// let headers = new Headers();
		// headers.append('Access-Control-Allow-Origin' , '*');
	 //    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
	 //    headers.append('Accept','application/json');
	 //    headers.append('content-type','application/json');
		// let options = new RequestOptions({ headers: headers,withCredentials: true });

		return this.http.post('http://elizade.ebukaokwuokenye.com/api/login', {email: user, password: password})


	}
}