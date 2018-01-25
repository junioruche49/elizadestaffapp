import { Products } from '../models/products.model'

export class Productservice {
	private products : Products[];

	constructor(){
		this.products = [new Products(1, 'Toyota Suv', 'nice good car with good breaks', 'toyota1.jpeg', 'toyota3.png', 'toyota4.png'),
				new Products(2, 'Toyota Corolla Engine', 'nice good engine with good breaks and Engine', 'toyotaengine1.jpg', 'toyotaengine2.png', 'toyotaengine3.jpg'),
				new Products(1, 'Toyota Camry', 'nice good car with good breaks and Engine', 'toyota5.png', 'toyota6.png', 'toyota7.jpeg')];
	}

	getProducts(){
		return this.products.slice();
	}
	getProduct(index: number){
		return this.products[index];
	}
}