import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service';
import { saleSexecutive } from '../../models/salesexecutive.model'

/**
 * Generated class for the SalesexecutivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salesexecutive',
  templateUrl: 'salesexecutive.html',
})
export class SalesexecutivePage {
	call = 'yes'
	user: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesexecutivePage');
  }

  submit(form: NgForm){
  	let phone;
  	let date_time;
  	let comment;


  	if (this.call == 'yes') {
  		phone = form.value.phonenumber;
  		date_time = form.value.date_time;
  		comment = form.value.comment;
  	}else{
  		phone = '';
  		date_time = '';
  		comment = '';
  	}

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
  	this.formservice.addSalesExecutive(new saleSexecutive(this.user.customer_number, form.value.callrequest, phone, date_time, comment)).subscribe((data: any) => {
  		
  		const toast = this.toast.create({
  		message: data.message,
  		duration: 1500,
  		position: 'bottom'
  		});

  		loading.dismiss();
  		toast.present();
  		this.formservice.salesexecutive.push(new saleSexecutive(this.user.customer_number, form.value.callrequest, phone, date_time, comment));
  		this.navCtrl.pop();

  	},err => {
  		loading.dismiss();
  		toast2.present();
  	})
  	console.log(this.formservice.getSalesExecutive());
  }

}
