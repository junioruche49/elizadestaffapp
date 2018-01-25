import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formsService } from '../../service/formsService.service';
import { Showroom } from '../../models/showroom.model'
import { AppointmentdisplayPage } from '../../pages/appointmentdisplay/appointmentdisplay'

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {
	showrooms: Showroom[] = [];
	showroom: Showroom;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formservice: formsService) {
  	this.showrooms = this.formservice.getShowrooms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

  showappointmentpage(index: number){
  	this.showroom = this.formservice.getShowroom(index);
  	this.navCtrl.push(AppointmentdisplayPage, {showroom: this.showroom})
  }

}
