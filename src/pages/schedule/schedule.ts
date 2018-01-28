import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service';
import { Schedule } from '../../models/schedule.model'
import { LocationProvider } from '../../providers/location/location'
import { location } from '../../models/location'

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
	schedule : Schedule;
	user: User;
	location: location;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  public loading: LoadingController,
  			  public locations: LocationProvider) {
  	this.location = this.locations.location;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending'
  	})
  	loading.present();

  	const toast2 = this.toast.create({
  		message: 'Something Went wrong',
  		duration: 1500,
  		position: 'bottom'
  	}); 
  	 this.user = this.users.getUser();
  	this.formservice.addSchedule(new Schedule(this.user.customer_number, form.value.location, form.value.date)).subscribe((data: any) => {
  		
  		const toast = this.toast.create({
  		message: data.message,
  		duration: 1500,
  		position: 'bottom'
  		});

  		loading.dismiss();
  		toast.present();
  		this.formservice.schedule.push(new Schedule(this.user.customer_number, form.value.location, form.value.date));
  		this.navCtrl.pop();

  	},err => {
  		loading.dismiss();
  		toast2.present();
  	})
  	console.log(this.formservice.getSchedule());
  }

}
