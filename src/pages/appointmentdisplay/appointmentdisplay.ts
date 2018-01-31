import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showroom } from '../../models/showroom.model'
import { Appointments } from '../../models/appointments.model'
import { formsService } from '../../service/formsService.service';

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
	appointments: Appointments;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  		      public formservice: formsService) {
  	this.appointments = this.navParams.get('appointment');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentdisplayPage');
  }

  ionViewWillEnter(){
  }

}
