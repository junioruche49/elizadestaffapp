import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms'
import { Car } from '../../service/cars.service'
import { Cars } from '../../models/cars.model'
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';

/**
 * Generated class for the CreatecarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createcar',
  templateUrl: 'createcar.html',
})
export class CreatecarPage {
	user: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public car: Car,
  			  public users: Users,
  			  public toast: ToastController,
  			  public loading: LoadingController,
  			  public formservice: formsService,
  			  public viewcontrol: ViewController
  			  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatecarPage');
  }

  submit(form: NgForm){
  	const loading = this.loading.create({
  		content: 'Sending...'
  	})
  	loading.present();

  	this.user = this.users.getUser();
  	this.car.addCar(new Cars(form.value.vehicle_regno, form.value.vehicle_model, form.value.vehicle_year, this.user.customer_number))
  	.subscribe((data: any) => {
  		
  		const toast = this.toast.create({
  		message: data.message,
  		duration: 1500,
  		position: 'bottom'
  		});

  		loading.dismiss();
  		toast.present();
  		this.car.cars.push(new Cars(form.value.vehicle_regno, form.value.vehicle_model, form.value.vehicle_year, this.user.customer_number));
  		this.navCtrl.pop();

  	},err => {
  		const toast2 = this.toast.create({
  		message: err.message,
  		duration: 1500,
  		position: 'bottom'
  	});
  		loading.dismiss();
  		toast2.present();
  	})
  }

  closemodal(){
  	this.viewcontrol.dismiss();
  }

}
