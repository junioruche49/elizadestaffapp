import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { Usersadded } from '../../models/users.model'
import { alertData } from '../../models/alertdata.model'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';
import { formsService } from '../../service/formsService.service';
import { QuotationPage } from '../../pages/quotation/quotation'

/**
 * Generated class for the SparepartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sparepart',
  templateUrl: 'sparepart.html',
})
export class SparepartPage {
  sparepart: Sparepartquotation;
	quote: boolean = false;
	usersadded: Usersadded[] = [];
	usersdata: alertData;
	user : User;
	selecteduser: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public users: Users,
  			  public formservice: formsService,
  			  private alertCtrl: AlertController,
  			  public toast: ToastController) {
  	this.sparepart = this.navParams.get('part');
  	this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartPage');
  }

  showform(){
  	this.quote = true;
  }

  addquotation(form: NgForm){
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

	      		this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.sparepart.product_name,
					image: this.sparepart.image,
	      			product: this.sparepart.part_no,
	      			product_type: 'Toyota Spare Part',
	      			qty: form.value.quantity,
	      			chasisno: form.value.chassis_no,
	      			part_desc: form.value.desc,
	      			part_no: form.value.part_no
	      		})
	      	
	      	
  			this.navCtrl.push(QuotationPage)
	      }
	    });
	    alert.present();
	    

  	}else{

  		const toast = this.toast.create({
	  		message: 'Sent Successfully',
	  		duration: 1500,
	  		position: 'bottom'
  		});
	  	toast.present()
	  	 this.selecteduser = this.user.customer_number;

	      	this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.sparepart.product_name,
					image: this.sparepart.image,
	      			product: this.sparepart.part_no,
	      			product_type: 'Toyota Spare Part',
	      			qty: form.value.quantity,
	      			chasisno: form.value.chassis_no,
	      			part_desc: form.value.desc,
	      			part_no: form.value.part_no
	      		})
	    console.log(this.formservice.getQuotation());
  		this.navCtrl.push(QuotationPage)
  	

  	}

  }

}
