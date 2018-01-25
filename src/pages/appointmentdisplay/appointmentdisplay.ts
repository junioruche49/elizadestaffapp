import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showroom } from '../../models/showroom.model'

/**
 * Generated class for the AppointmentdisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointmentdisplay',
  templateUrl: 'appointmentdisplay.html',
})
export class AppointmentdisplayPage {
	showroom: Showroom;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.showroom = this.navParams.get('showroom');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentdisplayPage');
  }

}
