import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cars } from '../../models/cars.model'

/**
 * Generated class for the CardisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardisplay',
  templateUrl: 'cardisplay.html',
})
export class CardisplayPage {
	car: Cars;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.car = this.navParams.get('car');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardisplayPage');
  }

}
