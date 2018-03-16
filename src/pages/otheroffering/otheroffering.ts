import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MobileworkshopPage } from '../mobileworkshop/mobileworkshop'
import { EarlybirdservicePage } from '../earlybirdservice/earlybirdservice'
import { TyreservicePage } from '../tyreservice/tyreservice'

/**
 * Generated class for the OtherofferingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otheroffering',
  templateUrl: 'otheroffering.html',
})
export class OtherofferingPage {
	mobile = MobileworkshopPage;
	early = EarlybirdservicePage;
	tyre = TyreservicePage;

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherofferingPage');
  }

  submit(form: NgForm){

  }

  close(){
  	this.viewCtrl.dismiss();
  }

}
