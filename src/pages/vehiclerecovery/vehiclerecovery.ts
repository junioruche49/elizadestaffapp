import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms'
import { Home3Page } from '../home3/home3'

/**
 * Generated class for the VehiclerecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiclerecovery',
  templateUrl: 'vehiclerecovery.html',
})
export class VehiclerecoveryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclerecoveryPage');
  }

  submit(f: NgForm){

          	this.navCtrl.push(Home3Page);
  }

}
