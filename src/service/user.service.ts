import { Injectable } from '@angular/core'
import { User } from '../models/user.model'
import { Usersadded } from '../models/users.model'
import { Storage } from '@ionic/storage';

@Injectable()

export class Users {
	private User : User;

	private Users: Usersadded[] = [];

	constructor (private storage: Storage){
		this.storage.get('user').then((val : User) => {
		    console.log(val);
		    this.User = val;
		});
	}

	getUser(){
		
		return this.User;
	}

	addUser(user: User){
		this.User = user;
	}

	removeUser(){
	}

	addUsers(value: Usersadded){
		this.Users.push(value);
	}

	getUsers(){
		return this.Users;
	}
}