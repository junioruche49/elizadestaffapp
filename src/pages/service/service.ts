import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service';
import { Service } from '../../models/service.model'
import { Car } from '../../service/cars.service'
import { Cars } from '../../models/cars.model'
import { alertData } from '../../models/alertdata.model'
import { ServiceHistory } from '../../models/servicehistory.model'

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
	user: User;
	cars: Cars[] = [];
	carsdata: alertData;
	getcar: Cars;
	reg_no: string;
	type: string;
	model: string;
	year: any;
	selectedcar: number;
	myDate: any = ""
	selectservice = 'minor_service'
	@ViewChild('myInput') myInput: ElementRef;
  mileagetype: any;
  selectservicetype: string;
  selectedtype: any;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  public alertCtrl: AlertController,
  			  public car: Car,
  			  public loading: LoadingController) {

  }

  ionViewWillEnter(){
  	this.cars = this.car.getCars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  submit(form: NgForm){
  	let desc;
  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();
  	 this.user = this.users.getUser();

  	let year = new Date(form.value.vehicle_year).getFullYear();
    let type
    if (this.selectservicetype == 'series_a') {
      type = 'A'
    }else if (this.selectservicetype == 'series_b') {
      type = 'B'
    }else if (this.selectservicetype == 'series_c') {
       type = 'C'
    }else if (this.selectservicetype == 'series_d') {
      type = 'D'
    }
  	this.formservice.addService(new Service(this.user.customer_number, 
  												form.value.reg_no, 
  												form.value.vehicle_year,
  												form.value.vehicle_model, 
  												year,
  												this.mileagetype,
  												form.value.service_date,
  												form.value.service,
  												type,
  												form.value.percieved,
  												form.value.pickup))
  	.subscribe((data: any) => {
  		
  		const toast = this.toast.create({
  		message: data.message,
  		duration: 1500,
  		position: 'bottom'
  		});

  		loading.dismiss();
  		toast.present();
  		this.formservice.service.push(new Service(this.user.customer_number, 
  												form.value.reg_no, 
  												form.value.vehicle_year,
  												form.value.vehicle_model, 
  												year,
  												this.mileagetype,
  												form.value.service_date,
  												form.value.service,
  												this.selectservicetype,
  												form.value.percieved,
  												form.value.pickup));
     // this.formservice.servicehistory.push(new ServiceHistory('aekeded', 
     //                                                         form.value.service,
     //                                                         this.user.customer_number,
     //                                                         'demo',
     //                                                         'sddsdsd',
     //                                                         'sddsdssd',
     //                                                         'sdsdsds',
     //                                                         form.value.service,
     //                                                         form.value.reg_no,
     //                                                         this.mileagetype,
     //                                                         'lkklk',
     //                                                         this.selectservicetype,
     //                                                         'kkk',
     //                                                         'dsddsd',
     //                                                         form.value.pickup,
     //                                                         'ffddfffd'));
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
  	console.log(this.formservice.getService());
  }

  selectcars(){

  	let alert = this.alertCtrl.create();
    alert.setTitle('Select User');

    	let i = 0;
	    for (let userdata of this.cars) {
	    	
	    	this.carsdata = {
	      type: 'radio',
	      label: userdata.Model,
	      value: i,
	      checked: false
	    }
	    alert.addInput(this.carsdata);
	    i++;

	    }
	    

	    alert.addButton('Cancel');
	    alert.addButton({
	      text: 'OK',
	      handler: data => {
	      	
	      	this.getcar = this.car.getCar(data);
	      	this.model = this.getcar.Model;
	      	this.reg_no = this.getcar.RegistrationNo;
	      	this.year = new Date(this.getcar.Year+'/02/02').getFullYear();
	      	this.myDate = new Date(this.getcar.Year+'/02/02').toISOString();
	      	console.log(this.myDate);
	      }
	    });
	    alert.present();

  }

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
	}

  confirm(){
    if (this.mileagetype == '5000') {
      // code...
      this.selectservicetype = 'series_a'
      this.selectedtype = 'A'
    }else if (this.mileagetype == '10000') {
      // code...
       this.selectservicetype = 'series_b'
       this.selectedtype = 'B'
    }else if (this.mileagetype == '15000') {
      // code...
       
       this.selectedtype = 'C'
    }else{
      this.selectservicetype = 'series_d'
      this.selectedtype = 'D'
    }

  }

}
