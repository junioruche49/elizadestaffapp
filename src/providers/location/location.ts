import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { location } from '../../models/location'
import { Storage } from '@ionic/storage';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
	location : location;

  constructor(public http: HttpClient, public storage: Storage) {


  	this.storage.get('location')
      .then(location => {

        if(location){
        	this.location = location
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe( (data : location) => { 
        	this.location = data.data   	
    	this.storage.set('location', this.location);
        console.log(this.location)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data : location) => { 
      	this.location = data.data   	
    	this.storage.set('location', this.location);
        console.log(this.location)
    	},err =>{console.log(err) })

      })

    
  }

}
