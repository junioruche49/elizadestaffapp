import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Users } from '../../service/user.service';
import { mechanicalRepair } from '../../models/mechanicalrepair.model'
import { Car } from '../../service/cars.service'
import { Cars } from '../../models/cars.model'
import { alertData } from '../../models/alertdata.model'
import { DescriptiontypePage } from '../descriptiontype/descriptiontype'

/**
 * Generated class for the MaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintenance',
  templateUrl: 'maintenance.html',
})
export class MaintenancePage {

  user: User;
	cars: Cars[] = [];
	carsdata: alertData;
	getcar: Cars;
	reg_no: string;
	type: string;
	model: string;
	selectedcar: number;
	myDate: any = ""
	selectrepair = "mechanical"
	@ViewChild('myInput') myInput: ElementRef;
  repair_type: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  public alertCtrl: AlertController,
  			  public car: Car,
  			  public loading: LoadingController,
          public modal: ModalController) {

  }

  ionViewWillEnter(){
  	this.cars = this.car.getCars();
  }

}
