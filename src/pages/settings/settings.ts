import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms'
import { Storage } from '@ionic/storage';
import { Usersadded } from '../../models/users.model'
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { AccountsPage } from '../../pages/accounts/accounts'

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	settings = "account"
	usersadded: Usersadded;
	user: User;
	getUsers: Usersadded[] = [];


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public storage: Storage, 
  			  public toast: ToastController, 
  			  public modal: ModalController,
  			  public users: Users) {
  		this.getUsers = users.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  submitcode(form: NgForm){

  	this.user = this.users.getUser();

  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  	});
  	toast.present()
  	this.users.addUsers(new Usersadded(this.user.customer_number, form.value.name, form.value.code))

    
	    console.log(this.users.getUsers());

	form.reset();
  }

  showaccounts(){
  	this.modal.create(AccountsPage).present();
  }

}
