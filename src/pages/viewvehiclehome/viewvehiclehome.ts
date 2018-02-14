import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Vehicle } from '../../service/vehicle.service'
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { formsService } from '../../service/formsService.service';
import { Home3Page } from '../home3/home3'

/**
 * Generated class for the ViewvehiclehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewvehiclehome',
  templateUrl: 'viewvehiclehome.html',
})
export class ViewvehiclehomePage {
	vehicle: Vehiclemodel
	quote: boolean = false;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public alertCtrl: AlertController) {
  	this.vehicle = this.navParams.get('vehicle');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewvehiclehomePage');
  }

  showform(){
  	this.quote = true;
  }

  addquotation(){
  	let prompt = this.alertCtrl.create({
      title: 'Contact',
      message: "Please Enter your contact information",
      inputs: [
        {
          name: 'title',
          placeholder: 'Phone Number or Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
          	this.navCtrl.push(Home3Page);
          }
        }
      ]
    });
    prompt.present();
  }

}
