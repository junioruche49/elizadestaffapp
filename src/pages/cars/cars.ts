import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Car } from '../../service/cars.service'
import { Cars } from '../../models/cars.model'
import { CardisplayPage } from '../../pages/cardisplay/cardisplay'
import { CreatecarPage } from '../../pages/createcar/createcar'

/**
 * Generated class for the CarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cars',
  templateUrl: 'cars.html',
})
export class CarsPage {

	cars: Cars[] = [];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public car: Car,
  			  public modal: ModalController) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarsPage');
  }

  ionViewWillEnter(){
  	this.cars = this.car.getCars();
  }

  viewproduct(index: Car){
  	this.navCtrl.push(CardisplayPage, {car: index})
  }

  addcar(){
  	this.modal.create(CreatecarPage).present()
  }

}
