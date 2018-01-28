import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Quotation } from '../../models/quotation.model'
import { formsService } from '../../service/formsService.service';
import { Productservice } from '../../service/products.service'

/**
 * Generated class for the QuotedisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotedisplay',
  templateUrl: 'quotedisplay.html',
})
export class QuotedisplayPage {
	prod_idex: Products;
	quotation: Quotation;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public formsservice: formsService,
  	public product: Productservice,
  	public loadingCtrl: LoadingController) {
  	let loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();
  	this.quotation = this.formsservice.getSingleSetQuotation(this.navParams.get('id'));
  	this.prod_idex = this.product.getProduct(this.quotation.product);
  	loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotedisplayPage');
  }

}
