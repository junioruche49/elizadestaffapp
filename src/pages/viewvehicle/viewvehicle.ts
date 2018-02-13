import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Usersadded } from '../../models/users.model'
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { alertData } from '../../models/alertdata.model'
import { Vehicle } from '../../service/vehicle.service'
import { QuotationPage } from '../../pages/quotation/quotation'

/**
 * Generated class for the ViewvehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewvehicle',
  templateUrl: 'viewvehicle.html',
})
export class ViewvehiclePage {
	vehicle: Vehiclemodel
	call = 'yes'
	usersadded: Usersadded[] = [];
	user : User;
	selecteduser: any;
	usersdata: alertData;
	quantity: any;
	comment = '';
	quote: boolean = false;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public users: Users,
          	  public vehicleservice: Vehicle,
          	  public viewchild: ViewController,
  			  private alertCtrl: AlertController,
  			  public toast: ToastController,
  			  public formservice: formsService) {
  	this.vehicle = this.navParams.get('vehicle');
  	this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewvehiclePage');
  }

  closemodal(){
  	this.viewchild.dismiss();
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

	      	let option = form.value.callrequest;
	      	if (option == 'no') {
	      		this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.vehicle.vehicle_model,
					image: this.vehicle.vehicle_image_1,
	      			product: this.vehicle.modelId,
	      			product_type: this.vehicle.vehicle_type,
	      			comment: form.value.comment,
	      			vehicle_model: this.vehicle.vehicle_model,
	      			vehicle_year: this.vehicle.vehicle_year,
	      			vehicle_reg_no: this.vehicle.vehicle_reg_no 
	      		})
	      	}else{
	      		this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.vehicle.vehicle_model,
					image: this.vehicle.vehicle_image_1,
	      			product: this.vehicle.modelId,
	      			product_type: this.vehicle.vehicle_type,
	      			qty: form.value.quantity,
	      			vehicle_model: this.vehicle.vehicle_model,
	      			vehicle_year: this.vehicle.vehicle_year,
	      			vehicle_reg_no: this.vehicle.vehicle_reg_no 
	      		})
	      	}


	      	// if (this.prod_idex.ProductType == 'Motor Vehicle') {
	      		// this.product = this.products.getProduct(this.index);
	    //   		this.formservice.addQuotation({
	    //   			customercode: this.selecteduser,
					// productname: this.vehicle.vehicle_model,
	    //   			product: this.vehicle.modelId,
	    //   			product_type: this.vehicle.vehicle_type,
	    //   			qty: form.value.quantity,
	    //   			vehicle_model: this.vehicle.vehicle_model,
	    //   			vehicle_year: this.vehicle.vehicle_year,
	    //   			vehicle_reg_no: this.vehicle.vehicle_reg_no 
	    //   		})
  			// console.log(this.formservice.getQuotation());
	      	// }else{
	      	// 	this.product = this.products.getProduct(this.index);
	      	// 	this.formservice.addQuotation({
								//       			customercode: this.selecteduser,
								//       			productname: this.product.ProductName,
								//       			product: this.index,
								//       			qty: this.spquantity,
								//       			product_type: this.prod_idex.ProductType,
								//       			chasisno: this.chassis_no,
								//       			part_desc: this.desc,
								//       			part_no: this.part_no
								//       		})
	      	// }
	      	
	      	
  			this.navCtrl.push(QuotationPage)
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

	      	let option = form.value.callrequest;
	      	if (option == 'no') {
	      		this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.vehicle.vehicle_model,
					image: this.vehicle.vehicle_image_1,
	      			product: this.vehicle.modelId,
	      			product_type: this.vehicle.vehicle_type,
	      			comment: form.value.comment,
	      			vehicle_model: this.vehicle.vehicle_model,
	      			vehicle_year: this.vehicle.vehicle_year,
	      			vehicle_reg_no: this.vehicle.vehicle_reg_no 
	      		})
	      	}else{
	      		this.formservice.addQuotation({
	      			customercode: this.selecteduser,
					productname: this.vehicle.vehicle_model,
					image: this.vehicle.vehicle_image_1,
	      			product: this.vehicle.modelId,
	      			product_type: this.vehicle.vehicle_type,
	      			qty: form.value.quantity,
	      			vehicle_model: this.vehicle.vehicle_model,
	      			vehicle_year: this.vehicle.vehicle_year,
	      			vehicle_reg_no: this.vehicle.vehicle_reg_no 
	      		})
	      	}
	    //   	}else{
	    //   		this.product = this.products.getProduct(this.index);
	    //   		this.formservice.addQuotation({
	    //   			customercode: this.selecteduser,
					// productname: this.product.ProductName,
	    //   			product: this.index,
	    //   			qty: this.spquantity,
	    //   			product_type: this.prod_idex.ProductType,
	    //   			chasisno: this.chassis_no,
	    //   			part_desc: this.desc,
	    //   			part_no: this.part_no
	    //   		})
	    //   	}
	    console.log(this.formservice.getQuotation());
  		this.navCtrl.push(QuotationPage)
  	

  	}

  	
  	
  }

}
