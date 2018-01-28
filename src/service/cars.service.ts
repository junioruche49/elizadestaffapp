import { Injectable } from '@angular/core'
import { RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Cars } from '../models/cars.model'
import { User } from '../models/user.model'
import { Users } from '../service/user.service'

@Injectable()

export class Car{
	User: User;
	private cars:Cars[] = [];

	constructor(public http: HttpClient, public Users: Users, private storage: Storage){
		this.User = this.Users.getUser();
		this.storage.get('cars')
      .then(cars => {
      	this.cars = cars
      	console.log(this.cars)
      })
	}


	getCars() {

		return this.cars;
	}
	addCar(value: Cars){
		this.cars.push(value);
	}

	getCar(index: number){
		return this.cars[index];
	}

	updatecars(token){

		if (this.cars.length < 1) {
			
			let headers = new HttpHeaders({'Authorization': 'Bearer '+token });
		this.http.get('http://elizade.ebukaokwuokenye.com/api/cars', {headers: headers}).subscribe((data: any) => {
			this.cars = data.data
			console.log(this.cars)
		},err => {
			console.log(err);
		}
		)

		}
		
	}

}