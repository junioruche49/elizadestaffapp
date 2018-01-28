import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { Quotation } from '../../models/quotation.model'
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Usersadded } from '../../models/users.model'
import { alertData } from '../../models/alertdata.model'

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage implements OnInit  {

	prod_idex: Products;
	index: number;
	quantity: number;

	usersadded: Usersadded[] = [];
	user : User;
	usersdata: alertData;
	selecteduser: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  private storage: Storage,
  			  private alertCtrl: AlertController) {

  	
	    this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  ngOnInit(){
  	this.prod_idex = this.navParams.get('id');
  	this.index = this.navParams.get('index');
  }

  addquotation(){
  	if (this.usersadded.length > 0) {
  		
  		let alert = this.alertCtrl.create();
    alert.setTitle('Select User');

    	alert.addInput({
    		type: 'radio',
	      label: 'You',
	      value: this.user.customer_number,
	      checked: false
    	});

	    for (let userdata of this.usersadded) {
	    	this.usersdata = {
	      type: 'radio',
	      label: userdata.name +' - '+ userdata.code,
	      value: userdata.code,
	      checked: false
	    }
	    alert.addInput(this.usersdata);
	    }
	    

	    alert.addButton('Cancel');
	    alert.addButton({
	      text: 'OK',
	      handler: data => {
	      	this.selecteduser = data;
	      	this.formservice.addQuotation(new Quotation(this.selecteduser, 
  												this.index, 
  												this.quantity))
  			console.log(this.formservice.getQuotation());
  			this.navCtrl.pop()
	      }
	    });
	    alert.present();
	    

  	}else{

  		const toast = this.toast.create({
	  		message: 'Sent Successfully',
	  		duration: 3500,
	  		position: 'bottom'
  		});
	  	toast.present()
	  	 this.selecteduser = this.user.customer_number;
	  	 this.formservice.addQuotation(new Quotation(this.selecteduser, 
  												this.index, 
  												this.quantity))
  	console.log(this.formservice.getQuotation());
  		this.navCtrl.pop()
  	

  	}

  	
  	
  }

}
