import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { Vehicle } from '../../service/vehicle.service'

/**
 * Generated class for the ViewvehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewvehicle',
  templateUrl: 'viewvehicle.html',
})
export class ViewvehiclePage {
	vehicle: Vehiclemodel

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          	  public vehicleservice: Vehicle,
          	  public viewchild: ViewController) {
  	this.vehicle = this.navParams.get('vehicle');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewvehiclePage');
  }

  closemodal(){
  	this.viewchild.dismiss();
  }

}
