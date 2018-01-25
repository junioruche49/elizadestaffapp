import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { User } from '../../models/user.model';
import { Users } from '../../service/user.service'


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	user: User;
	usertest : User;

  constructor(public navCtrl: NavController,  private storage: Storage, public users: Users) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  signup(){
  	this.navCtrl.push(SignupPage);
  }
  forgot(){}

  signin(form: NgForm){

  	this.usertest =  {
		            id: 1,
		            email: "demo@mail.com",
		            customer_number: "CUST013643",
		            created_at: "2017-12-19 08:29:03",
		            updated_at: "-0001-11-30 00:00:00",
		            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOm51bGwsImV4cCI6MTUxNjg3NjgwMywiaWF0IjoxNTE2MDEyODAzLCJzdWIiOjF9.rpu6ngAlZ0iCVUbOsN3B2Lzsa-uTYtmb3IxsSAf8L_A"
		        }
	this.users.addUser(this.usertest);
	console.log(this.users.getUser());		
    this.storage.set('user', this.usertest);

  	this.storage.get('user').then((val : User) => {
	    console.log(val);
	    this.user = val;
	});


    this.navCtrl.setRoot(HomePage);

  }

}
