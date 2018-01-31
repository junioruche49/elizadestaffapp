import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Products } from '../models/products.model'
import { User } from '../models/user.model'
import { Users } from '../service/user.service'
import { Vehiclequotation } from '../models/vehiclequotation.model'
import { Sparepartquotation } from '../models/sparepartquotation.model'
import { Quotation } from '../models/quotation.model'

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
	addproducts(product: Products[]){
		this.products.push(...product);
	}

	addvehicle(value: Quotation, number: number){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/quotes/vehicle', 
			{product_name: value.productname, 
			quantity: value.qty,
			billname: value.customercode,
			vehicle_model: value.vehicle_model,
			vehicle_year: value.vehicle_year,
			vehicle_reg_no: value.vehicle_reg_no,
			unique_number: number}, {headers: headers})

	}

	addsparepart(value: Quotation, number: number){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/quotes/parts', 
			{product_name: value.productname, 
			quantity: value.qty,
			billname: value.customercode,
			chasisno: value.chasisno,
			part_desc: value.part_desc,
			part_no: value.part_no,
			unique_number: number}, {headers: headers})

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
