import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { formsService } from '../../service/formsService.service';
import { Diagnosis } from '../../models/diagnosis.model'
import { ServicerequestdisplayPage } from '../servicerequestdisplay/servicerequestdisplay'
import { ServiceHistory } from '../../models/servicehistory.model'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';

/**
 * Generated class for the ServicerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicerequest',
  templateUrl: 'servicerequest.html',
})
export class ServicerequestPage {
	servicerequests: Diagnosis[] = [];
	serviceHistory: ServiceHistory[] = []
	singleservice: ServiceHistory;
	User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formsservice: formsService,
  		      public storage: Storage,
  			  public loadingCtrl: LoadingController,
  			  public users: Users,
  			  private http: HttpClient) {
  	let loader = this.loadingCtrl.create({content: "Loading..."});
    

    	this.User = this.users.getUser();
    	this.serviceHistory = this.formsservice.getServiceHistory();
    	console.log()
    	if (this.serviceHistory.length < 1 ) {
    		loader.present();
    		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
    		let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/services', {headers: headers}).subscribe((data: any) => {
			if (data.data.length > 0) {
				this.storage.set('services', data.data)
				this.formsservice.addServiceHistory(data.data);
				this.serviceHistory = this.formsservice.getServiceHistory();
				console.log(this.serviceHistory.length)
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
    console.log('ionViewDidLoad ServicerequestPage');
  }

  ionViewWillEnter(){
  	// this.storage.get('services')
	  //     .then(services => {
	  //     	this.serviceHistory.push(...services);
	  //     	this.formsservice.servicehistory.push(...services);
	  //     }).catch(err => {

   //    	console.log(err.message)

   //    })
  }

  servicerequestpage(index: number){
  	this.singleservice = this.serviceHistory[index];
  	this.navCtrl.push(ServicerequestdisplayPage, {servicerequests: this.singleservice})
  }


}
