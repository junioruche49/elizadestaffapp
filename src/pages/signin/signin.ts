import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { User } from '../../models/user.model';
import { Users } from '../../service/user.service'
import { AuthPage } from '../../service/authpage'
import { LocationProvider } from '../../providers/location/location'


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	user: User;
	usertest : User;

  constructor(public navCtrl: NavController,  
  			  private storage: Storage, 
  			  public users: Users, 
  			  public loading: LoadingController,
  			  public alert: ToastController,
  			  public location: LocationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  signup(){
  	this.navCtrl.push(SignupPage);
  }
  forgot(){}

  signin(form: NgForm){
  	const load = this.loading.create({content: 'loading'})
  	load.present();

	const auth = this.users.authentic(form.value.email, form.value.password).subscribe((user:any) => {
				this.user = user.data.user
		        this.storage.set('user', this.user);
		        console.log(this.user)
		        this.users.addUser(this.user);
		        load.dismiss();
		        this.navCtrl.setRoot(HomePage);

		    	},err =>{
		    		load.dismiss();
		    		this.alert.create({
		    			message: err.message,
		    			duration: 3500,
		    			position: 'bottom'
		    		}).present()

		    	})
	
    



    

  }

}
