import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Showroom } from '../../models/showroom.model';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service'


/**
 * Generated class for the ShowroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showroom',
  templateUrl: 'showroom.html',
})
export class ShowroomPage {
	showroom : Showroom[] = [];
	user : User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowroomPage');
  }

  submit(form : NgForm){
  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  	});
  	toast.present()
  	 this.user = this.users.getUser();
  	this.formservice.addShowroom(new Showroom(this.user.customer_number, form.value.location, form.value.date))
  	console.log(this.formservice.getShowrooms());
  	this.navCtrl.pop();
  }

}
