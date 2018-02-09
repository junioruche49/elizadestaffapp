import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Saloon } from '../../models/saloon.model';
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { Vehicle } from '../../service/vehicle.service'
import { ViewvehiclePage } from '../viewvehicle/viewvehicle'

/**
 * Generated class for the ShowvehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showvehicle',
  templateUrl: 'showvehicle.html',
})
export class ShowvehiclePage {
	ids: any;
  saloon: Saloon[];
  vehicles: Vehiclemodel[];
  newvehicles: Vehiclemodel[];
  title: Vehiclemodel

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          	  public vehicle: Vehicle,
          	  public modal: ModalController) {
    this.vehicles = this.vehicle.car;
  	this.newvehicles  = this.vehicles.filter(this.findall(this.navParams.get('id')));
  	this.title = this.vehicles.find(this.findall(this.navParams.get('id')));
  	console.log(this.newvehicles);
  }

  findall(arg) {
  	// body...
  	return function findModel(model) { 
     return model.modelId === arg;
  }

  }

  gotoPage(vehicle: Vehiclemodel){
  	this.modal.create(ViewvehiclePage, {vehicle: vehicle}).present()
  }

  
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowvehiclePage');
  }

}
