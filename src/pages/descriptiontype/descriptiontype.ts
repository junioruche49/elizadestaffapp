import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-descriptiontype',
  templateUrl: 'descriptiontype.html',
})
export class DescriptiontypePage {

	mechanical = [
		'Noise from front and rear suspension while driving on rough road',
		'Noise from front suspension while diving on paving stones',
		'Noise from front or rear wheel while driving on express road',
		'Noise from engine',
		'Noise from engine',
		'Vehicle vibration while driving at 100,000km/hr.',
		'Vehicle vibration when brake is applied on top speed.',
		'Vehicle jerking on motion',
		'Vehicle overheating when driving in traffic.',
		'Vehicle not starting.',
		'Vehicle experiencing hard starting.',
		'Vehicle rough idling only in the mornings',
		'Brake ineffectiveness',
		'Oil dropping from under the engine.',
		'Smoke from exhaust.',
		'Vehicle experiencing oil shortage from the engine.',
		'Vehicle tilting towards left or right.'
	]

	electrical = [
		'Malfunction indicator light on dashboard. (check engine, airbag light, abs light e.t.c)',
		'Vehicle not starting',
		'AC not cooling',
		'AC cutting off while in traffic',
		'AC not cooling only in the afternoon.',
		'Vehicle navigation system not working.'
	]

	electronics = [
		'Vehicle vibration while driving at 100,000km/hr.',
		'Vehicle vibration when brake is applied on top speed.',
		'Vehicle jerking on motion',
		'Vehicle overheating when driving in traffic.',
		'AC not cooling only in the afternoon.',
		'Vehicle navigation system not working.'
	]

	all = [
		'Noise from front and rear suspension while driving on rough road',
		'Noise from front suspension while diving on paving stones',
		'Noise from front or rear wheel while driving on express road',
		'Noise from engine',
		'Noise from engine',
		'Vehicle vibration while driving at 100,000km/hr.',
		'Vehicle vibration when brake is applied on top speed.',
		'Vehicle jerking on motion',
		'Vehicle overheating when driving in traffic.',
		'Vehicle not starting.',
		'Vehicle experiencing hard starting.',
		'Vehicle rough idling only in the mornings',
		'Brake ineffectiveness',
		'Oil dropping from under the engine.',
		'Smoke from exhaust.',
		'Vehicle experiencing oil shortage from the engine.',
		'Vehicle tilting towards left or right.',
		'Malfunction indicator light on dashboard. (check engine, airbag light, abs light e.t.c)',
		'Vehicle not starting',
		'AC not cooling',
		'AC cutting off while in traffic',
		'AC not cooling only in the afternoon.',
		'Vehicle navigation system not working.'
	]

	data: any;
	fault : any;
	faultvalue: any;

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				public viewcontrol: ViewController) {
  	if (this.navParams.get('type') == 'mechanical') {
  		this.data = this.mechanical;
  		this.fault = "MECHANICAL"
  	}else if (this.navParams.get('type') == 'electrical') {
  		this.data = this.electrical;
  		this.fault = "ELECTRICAL/A.C."
  	}else if (this.navParams.get('type') == 'electronics') {
  		this.data = this.electronics;
  		this.fault = "Electronics"
  	}else if (this.navParams.get('type') == 'all') {
  		this.data = this.all;
  		this.fault = "MECHANICAL AND ELECTRICAL/A.C."
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptiontypePage');
  }

  send(){
  	this.viewcontrol.dismiss({fault: this.faultvalue});
  }

}
