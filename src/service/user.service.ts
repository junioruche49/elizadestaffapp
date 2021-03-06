import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model'
import { Usersadded } from '../models/users.model'
import { Storage } from '@ionic/storage';
import { Car } from '../service/cars.service'
import { Productservice } from '../service/products.service'

@Injectable()

export class Users {
	private User : User;

	private Users: Usersadded[] = [];

	constructor (private storage: Storage, private http: HttpClient){
		
	}

	authentic(user:any, password: any){

		return this.http.post('http://elizade.ebukaokwuokenye.com/api/login', {email: user, password: password})


	}

	getUser(){
		
			return this.User;
		
		
	}

	addUser(user: User){
		this.User = user;
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		

		let cars =  this.http.get('http://elizade.ebukaokwuokenye.com/api/cars', {headers: headers}).subscribe((data: any) => {
			if (data.data.length > 0) {

			this.storage.set('cars', data.data)
			}
			console.log(data.data)
		},err => {
			console.log(err);
		})

		// let services =  this.http.get('http://elizade.ebukaokwuokenye.com/api/services', {headers: headers}).subscribe((data: any) => {
		// 	if (data.data.length > 0) {

		// 	this.storage.set('services', data.data)
		// 	}

		// 	console.log(data.data)
		// },err => {
		// 	console.log(err);
		// })

		// let appointments =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
		// 	if (data.data.length > 0) {

		// 	this.storage.set('appointments', data.data)
		// 	}
		// 	console.log(data.data)
		// },err => {
		// 	console.log(err);
		// })

		// let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/products', {headers: headers}).subscribe((data: any) => {
		// 	if (data.length > 0) {
		// 		this.storage.set('products', data)
		// 	}
			
		// 	console.log(data)
		// },err => {
		// 	console.log(err);
		// })

	}

	removeUser(){
	}

	addUsers(value: Usersadded){
		this.Users.push(value);
	}

	getUsers(){
		return this.Users;
	}
}