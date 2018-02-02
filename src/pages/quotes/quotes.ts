import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quotation } from '../../models/quotation.model'
import { formsService } from '../../service/formsService.service';
import { Productservice } from '../../service/products.service'
import { Products } from '../../models/products.model'
import { QuotedisplayPage } from '../quotedisplay/quotedisplay'

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
	quotation: Quotation[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public formsservice: formsService, public products: Productservice) {
  	this.quotation = this.formsservice.getSentQuotation();
  }

  getproductname(index: number){
  	let product: Products;
  	 product = this.products.getProduct(index);
  	 return product.ProductName
  }

  // getproductimg(index: number){
  // 	let product: Products;
  // 	 product = this.products.getProduct(index);
  // 	 return product.product_image_1
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  quotespage(index: number){
  	this.navCtrl.push(QuotedisplayPage, {id: index});
  }
  

}
