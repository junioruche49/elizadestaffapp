export class Service {
	constructor(public customercode: string,
				public reg_no: string, 
				public vehicle_model: string,
				public vehicle_year: number,
				public mileage: string,
				public service_date: string,
				public service: string,
				public service_type: string,
				public percieved: string,
				public pickup: string){}
}