export class Quotation{
	constructor(public customercode: any, 
				public productname: string,
				public product: number, 
				public qty: number, 
				public product_type: string,
				public vehicle_model?: string,
				public vehicle_year?: string, 
				public vehicle_reg_no?: string,
				public chasisno?: string,
				public part_desc?: string,
				public part_no?: string  ){}
}