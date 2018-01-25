import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { ProductPage } from '../product/product'

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
export class ProductsPage {
	products : Products[];
	prod_idex: Products;
	data = true;


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public product: Productservice,
  			  public loadingCtrl: LoadingController) {
  	let loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();
  	this.products = this.product.getProducts()
  	loader.dismiss();

  	if (!this.navParams.data) {
  		this.data = true;
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  viewproduct(index: number){
  	this.prod_idex = this.product.getProduct(index);
  	this.navCtrl.push(ProductPage, {id: this.prod_idex, index: index});
  	 
  }

}
