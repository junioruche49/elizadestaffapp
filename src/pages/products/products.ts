import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { ProductPage } from '../product/product'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';
import { Saloon } from '../../models/saloon.model';
import { suv } from '../../models/suv.model'
import { utility } from '../../models/utility.model'
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { Vehicle } from '../../service/vehicle.service'
import { ShowvehiclePage } from '../showvehicle/showvehicle'
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { SparepartPage } from '../sparepart/sparepart'

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('0.6s ease-out', style({opacity: 1}))
        ]),
        transition(':leave', [
          animate('0.3s ease-out', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class ProductsPage implements OnInit {
	products : Products[] = [];
	prod_idex: Products;
	data = true;
	User: User;
	length = 0;
  saloon: Saloon[];
  element: any;
  suv: suv[];
  utility: utility[];
  spareparts: Sparepartquotation[];


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public product: Productservice,
  			  public loadingCtrl: LoadingController,
  			  private http: HttpClient,
  			  private storage: Storage,
  			  public users: Users,
          public vehicle: Vehicle) {
    this.saloon = this.vehicle.saloon;
    this.suv = this.vehicle.suv
    this.utility = this.vehicle.utility
    this.spareparts = this.vehicle.sparepart
    console.log(this.spareparts)
    console.log(this.vehicle.utility)
  // 	let loader = this.loadingCtrl.create({content: "Loading..."});
    

  //   	this.User = this.users.getUser();
  //   	this.products = this.product.getProducts();
  //   	console.log()
  //   	if (this.products.length < 1 ) {
  //   		loader.present();
  //   		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
  //   		let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/products', {headers: headers}).subscribe((data: any) => {
		// 	if (data.length > 0) {
  //       this.product.addproducts(data);
		// 		this.storage.set('products', data)
		// 		this.products = this.product.getProducts();
		// 		console.log(this.products.length)
		// 	}
				
  // 				loader.dismiss();
			
			
		// 	console.log(data)
		// },err => {
  //     this.storage.get('products').then((data : any) => {
  //       this.products = data
  //     loader.dismiss();
  //     }).catch(err => {
  //       console.log(err)
  //     loader.dismiss();
  //     })
		// })
  //   	}
		
  	

  // 	if (!this.navParams.data) {
  // 		this.data = true;
  // 	}
  }

  ngOnInit(){
  	
  }

  ionViewWillEnter(){
  }



  ionViewDidLoad() {
    
  }

  viewproduct(index: number){
  	this.prod_idex = this.product.getProduct(index);
  	this.navCtrl.push(ProductPage, {id: this.prod_idex, index: index});
  	 
  }

  showvehicle(id: any){
    this.navCtrl.push(ShowvehiclePage, {id: id})
  }

  showdetail(data){
    if (data == 'appointment') {
      this.element = 'appointment'
    }else if (data == 'repair') {
      this.element = 'repair'
    }else if (data == 'general') {
      this.element = 'general'
    }else if (data == 'spareparts') {
      this.element = 'spareparts'
    }
  }

  showsparepart(part: Sparepartquotation){
    this.navCtrl.push(SparepartPage, {part: part});
  }

}
