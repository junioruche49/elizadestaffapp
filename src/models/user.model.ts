export class User {
	constructor (public id: number,
				 public email: string, 
				 public customer_number: string, 
				 public created_at: string,
				 public updated_at: string,
				 public token: string ) {}
}