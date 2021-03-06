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
	public cars:Cars[] = [];

	constructor(public http: HttpClient, public Users: Users, private storage: Storage){
		this.User = this.Users.getUser();
		if (this.User) {
			this.storage.get('cars')
		      .then(cars => {
		      	if (cars) {
		      		this.cars = cars
		      	}else{
		      		this.updatecars(this.User.token);
		      	}
		      	
		      	console.log(this.cars)
		      })
		}
		
	}


	getCars() {

		return this.cars;
	}
	addCar(value: Cars){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/createcars', {vehicle_reg_no: value.RegistrationNo, vehicle_model: value.Model, vehicle_year: value.Year}, {headers: headers})
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