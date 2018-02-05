import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formsService } from '../../service/formsService.service';
import { Showroom } from '../../models/showroom.model'
import { AppointmentdisplayPage } from '../../pages/appointmentdisplay/appointmentdisplay'
import { Appointments } from '../../models/appointments.model'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';

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
	appointments: Appointments[] = [];
	singleAppointment: Appointments;
	User: User;

  constructor(public navCtrl: NavController, 
  		      public navParams: NavParams, 
  		      public formservice: formsService,
  		      public storage: Storage,
  			  public loadingCtrl: LoadingController,
  			  private http: HttpClient,
  			  public users: Users) {
  	let loader = this.loadingCtrl.create({content: "Loading..."});
    

    	this.User = this.users.getUser();
    	this.appointments = this.formservice.getAppointments();
    	console.log()
    	if (this.appointments.length < 1 ) {
    		loader.present();
    		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
    		let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
			if (data.data.length > 0) {
        this.formservice.addAppointments(data.data);
				this.storage.set('appointments', data.data)
				this.appointments = this.formservice.getAppointments();
				console.log(this.appointments.length)
			}
				
  				loader.dismiss();
			
			
			console.log(data.data)
		},err => {
			console.log(err);
			loader.dismiss();
		})
    	}
  }

  ionViewDidLoad() {
    if (this.appointments.length > 0) {
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.formservice.addAppointments(data.data);
        this.storage.set('appointments', data.data)
        this.appointments = this.formservice.getAppointments();
        console.log(this.appointments.length)
      }
        
      console.log(data.data)
    },err => {
      console.log(err);
    })
    }
  }
  ionViewWillEnter(){
  	// this.storage.get('appointments')
	  //     .then(appointments => {
	  //     	this.appointments.push(...appointments);
	  //     	this.formservice.appointments.push(...appointments);
	  //     }).catch(err => {

   //    	console.log(err.message)

   //    })
  }

  showappointmentpage(index: number){
  	this.singleAppointment = this.appointments[index];
  	this.navCtrl.push(AppointmentdisplayPage, {appointment: this.singleAppointment})
  }

}
