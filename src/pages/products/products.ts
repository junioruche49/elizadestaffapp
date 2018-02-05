import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { ProductPage } from '../product/product'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';

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
})
export class ProductsPage implements OnInit {
	products : Products[] = [];
	prod_idex: Products;
	data = true;
	User: User;
	length = 0;


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public product: Productservice,
  			  public loadingCtrl: LoadingController,
  			  private http: HttpClient,
  			  private storage: Storage,
  			  public users: Users) {
  	let loader = this.loadingCtrl.create({content: "Loading..."});
    

    	this.User = this.users.getUser();
    	this.products = this.product.getProducts();
    	console.log()
    	if (this.products.length < 1 ) {
    		loader.present();
    		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
    		let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/products', {headers: headers}).subscribe((data: any) => {
			if (data.length > 0) {
        this.product.addproducts(data);
				this.storage.set('products', data)
				this.products = this.product.getProducts();
				console.log(this.products.length)
			}
				
  				loader.dismiss();
			
			
			console.log(data)
		},err => {
      this.storage.get('products').then((data : any) => {
        this.products = data
      loader.dismiss();
      }).catch(err => {
        console.log(err)
      loader.dismiss();
      })
		})
    	}
		
  	

  	if (!this.navParams.data) {
  		this.data = true;
  	}
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

}
