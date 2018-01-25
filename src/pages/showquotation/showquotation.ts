import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'

/**
 * Generated class for the ShowquotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showquotation',
  templateUrl: 'showquotation.html',
})
export class ShowquotationPage {
	products: Products[] = [];


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  private product: Productservice,
  			  private viewchild: ViewController) {
  	this.products = this.product.getProducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowquotationPage');
  }

  closemodal(){
  	this.viewchild.dismiss();
  }

}
