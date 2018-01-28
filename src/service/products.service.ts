import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Products } from '../models/products.model'
import { User } from '../models/user.model'
import { Users } from '../service/user.service'

@Injectable()

export class Productservice {
	User: User;
	private products : Products[] = [];

	constructor(public http: HttpClient, public Users: Users, private storage: Storage){
		this.User = this.Users.getUser();
		this.storage.get('products')
      .then(products => {
      	this.products = products
      })
	}

	getProducts(){
		
		return this.products;
	}
	getProduct(index: number){
		return this.products[index];
	}

	updateproduct(){

		if (this.products.length < 1) {
			
			let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		this.http.get('http://elizade.ebukaokwuokenye.com/api/products', {headers: headers}).subscribe((data: any) => {
			this.products = data
			console.log(this.products)
		},err => {
			console.log(err);
		}
		)

		}
		
	}
}
