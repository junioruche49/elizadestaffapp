import { Cars } from '../models/cars.model'
export class Car{

	private cars = [new Cars('Toyota Suv', 'CDEF232RTD', 'SUV', 'Black', 2012, 'toyota1.jpeg'),
				new Cars('Toyota Camry', 'EFSA345KRT', 'Camry', 'Gray', 2016, 'toyota5.png')];

	getCars() {
		return this.cars;
	}
	addCar(value: Cars){
		this.cars.push(value);
	}

	getCar(index: number){
		return this.cars[index];
	}

}