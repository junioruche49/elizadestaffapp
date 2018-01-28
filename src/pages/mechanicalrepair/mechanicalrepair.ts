import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service';
import { mechanicalRepair } from '../../models/mechanicalrepair.model'
import { Car } from '../../service/cars.service'
import { Cars } from '../../models/cars.model'
import { alertData } from '../../models/alertdata.model'

/**
 * Generated class for the MechanicalrepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mechanicalrepair',
  templateUrl: 'mechanicalrepair.html',
})
export class MechanicalrepairPage {
	user: User;
	cars: Cars[] = [];
	carsdata: alertData;
	getcar: Cars;
	reg_no: string;
	type: string;
	model: string;
	selectedcar: number;
	myDate: any = ""
	selectrepair = "mechanical_repair"
	@ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  public alertCtrl: AlertController,
  			  public car: Car) {
  	this.cars = this.car.getCars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicalrepairPage');
  }

  submit(form: NgForm){
  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  	});
  	toast.present()
  	 this.user = this.users.getUser();

  	let year = new Date(form.value.vehicle_year).getFullYear();

  	this.formservice.addMechanicalrepair(new mechanicalRepair(this.user.customer_number, 
  												form.value.reg_no, 
  												form.value.vehicle_model, 
  												year,
  												form.value.repair_type,
  												form.value.service_date,
  												form.value.percieved,
  												form.value.pickup))
  	console.log(this.formservice.getMechanicalrepair());
  	this.navCtrl.pop();
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
	      	console.log(data);
	      	this.getcar = this.car.getCar(data);
	      	this.model = this.getcar.Model;
	      	this.reg_no = this.getcar.RegistrationNo;
	      	this.myDate = new Date(this.getcar.Year+'/02/02').toISOString();
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

}
