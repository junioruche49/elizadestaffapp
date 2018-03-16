import { Saloon } from '../models/saloon.model'
import { suv } from '../models/suv.model'
import { utility } from '../models/utility.model'
import { Vehiclemodel } from '../models/vehiclemodel.model'
import { Sparepartquotation } from '../models/sparepartquotation.model'

export class Vehicle{
	public saloon:Saloon[];
	public car: Vehiclemodel[];
	public suv: suv[];
	public utility: utility[];
	public pickups: utility[];
	public buses: utility[];
	public trucks: utility[];
	public certified: utility[];
	public sparepart: Sparepartquotation[];

	constructor(){
		this.saloon = [ 
			new Saloon('2', 'Avensis', 'day-exterior-27_040.jpg'),
			new Saloon('7', 'Camry', '2018_toyota_camry_angularfront.jpg'),
			new Saloon('8', 'Corolla', 'download.jpeg'),
			new Saloon('9', 'Yaris', 'USC50TOC191B021001.jpg')
		]

		this.suv = [
			new suv('3', 'Fortuner', '047.jpg'),
			new suv('4', 'Land Cruiser', 'USC30TOS121A021001.jpg'),
			new suv('10', 'Land Cruiser Prado', '20131205073612_Toyota Land Cruiser Prado.jpg'),
			new suv('11', 'Rav4', 'USC70TOS111D021001.png')
		]

		this.pickups = [
			new utility('13', 'Hilux', 'download.png'),
			new utility('14', 'Landcruiser 70/Safari Pick up', 'LandCruiser Troop Carrier Workmate french vanilla front 940x529.png')
		]

		this.buses = [
			new Saloon('1', 'Avanza', 'toyota-avanza-best-car.jpg'),
			new utility('12', 'Hiace', 'hiace.png'),
			new utility('5', 'Coaster', '2018_Toyota_Coaster.png'),

		]

		this.trucks = [
			new utility('6', 'Dyna', 'intro_2.jpg'),
		]

		this.certified = [
			new suv('10', 'Prado', '20131205073612_Toyota Land Cruiser Prado.jpg'),

		]

		this.utility = [
			new utility('14', 'Landcruiser 70/Safari Pick up', 'LandCruiser Troop Carrier Workmate french vanilla front 940x529.png')
		]

		this.car = [
			new Vehiclemodel('1', '223230', 'toyota', 'Avanza', 2015, 'avanza1.jpg', 'avanza2.jpg', 'avanza3.png', 'The engine and power train are quieter and fuel-efficient. The suspension enhances stability and handling for greater riding comfort. An innovative engine set-up in the Avanza features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered. '),
			new Vehiclemodel('1', '213230', 'toyota', 'Avanza', 2014, 'avanza4.png', 'avanza5.png', 'avanza4.png',  'The engine and power train are quieter and fuel-efficient. The suspension enhances stability and handling for greater riding comfort. An innovative engine set-up in the Avanza features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered. '),
			new Vehiclemodel('2', '2233430', 'toyota', 'Avensis 1.3 MT', 2016, 'avensis4.jpg', 'avensis5.jpg', 'avensis6.jpg', 'An innovative engine set-up in the Avensis features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered.  The astonishing turning circle of 4.7 metres is made possible by the electric power steering system, which also means you will save petrol with more accurate cornering.'),
			new Vehiclemodel('2', '2232301', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis1.jpg', 'avensis2.jpg', 'avensis3.jpg', 'An innovative engine set-up in the Avensis features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered.  The astonishing turning circle of 4.7 metres is made possible by the electric power steering system, which also means you will save petrol with more accurate cornering.'),
			new Vehiclemodel('1', '223239', 'toyota', 'Avanza', 2013, 'avanza3.png', 'avanza1.jpg', 'avanza2.jpg', 'The engine and power train are quieter and fuel-efficient. The suspension enhances stability and handling for greater riding comfort. An innovative engine set-up in the Avanza features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered. '),
			new Vehiclemodel('2', '223232', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis3.jpg', 'avensis2.jpg', 'avensis1.jpg', 'An innovative engine set-up in the Avensis features a Variable Valve Timing system from Toyota, acting to optimize the timing for the intake valve operations depending on conditions. This means the optimum level of power is used at all times and fuel economy and emissions are lowered.  The astonishing turning circle of 4.7 metres is made possible by the electric power steering system, which also means you will save petrol with more accurate cornering.'),
			new Vehiclemodel('3', '223231', 'toyota', 'Fortuner', 2013, 'fortuner1.jpg', 'fortuner1.jpg', 'fortuner1.jpg', 'The fortuner is a genuine 4WD designed and built to deliver execellent driving performance both on and off road.Its 2.7Litre 4cylinder engine produces 158HP which is channelled to all wheels through a 6speed automatic gearbox. The engine comes equipped with various advanced Toyota engine technologies like VVT-I(Variable Valve Timing with intelligence). The advantages of VVT-i include increased torque and output, better fuel econonmy and reduced emissions.'),
			new Vehiclemodel('4', '223233', 'toyota', 'Land Cruiser', 2013, 'landcruiser2.png', 'landcruiser1.jpeg', 'landcruiser3.png', 'The legendary Land Cruiser has been a leader in 4WD performance and reliability for over 60 years. It has become an integral part of peoples lives in virtually every land, and can be found cruising on roads in every corner of the globe. Now reborn to meet the future, with added ruggedness and power, the next generation King of 4WD features a host of new innovations to extend its mastery over the toughest terrain. Nothing slows the wheels of progress, The Pride of the Land.' ),
			new Vehiclemodel('3', '223234', 'toyota', 'Fortuner', 207, 'fortuner6.png', 'fortuner4.jpg', 'fortuner5.jpg', 'The fortuner is a genuine 4WD designed and built to deliver execellent driving performance both on and off road.Its 2.7Litre 4cylinder engine produces 158HP which is channelled to all wheels through a 6speed automatic gearbox. The engine comes equipped with various advanced Toyota engine technologies like VVT-I(Variable Valve Timing with intelligence). The advantages of VVT-i include increased torque and output, better fuel econonmy and reduced emissions.'),
			new Vehiclemodel('4', '223235', 'toyota', 'Land Cruiser', 2015, 'landcruiser5.png', 'landcruiser4.jpg', 'landcruiser6.png', 'The legendary Land Cruiser has been a leader in 4WD performance and reliability for over 60 years. It has become an integral part of peoples lives in virtually every land, and can be found cruising on roads in every corner of the globe. Now reborn to meet the future, with added ruggedness and power, the next generation King of 4WD features a host of new innovations to extend its mastery over the toughest terrain. Nothing slows the wheels of progress, The Pride of the Land.' ),
			new Vehiclemodel('5', '223236', 'toyota', 'Coaster', 2014, 'utility1.png', 'utility2.png', 'utility3.png', 'The best solution for avoiding an accident is to prevent it from happening. The Coaster provides many safety features that allow the driver to play an active role in safe driving. For example, the large windshield, the drivers safety window and the easy-to-adjust seat position help the driver detect hazards by offering a clear and expansive all-round view. Quick acceleration, excellent handling and a high level of braking performance all add up to easy control of the vehicle, assisting in safe motoring.' ),
			new Vehiclemodel('5', '223237', 'toyota', 'Coaster', 2014, 'utility3.png', 'utility2.png', 'utility1.png', 'The best solution for avoiding an accident is to prevent it from happening. The Coaster provides many safety features that allow the driver to play an active role in safe driving. For example, the large windshield, the drivers safety window and the easy-to-adjust seat position help the driver detect hazards by offering a clear and expansive all-round view. Quick acceleration, excellent handling and a high level of braking performance all add up to easy control of the vehicle, assisting in safe motoring.' ),
			new Vehiclemodel('6', '223238', 'toyota', 'Dyna', 2014, 'dyna1.jpg', 'dyna2.jpg', 'dyna3.jpg', 'Dyna powerplants combine both power and economy in the best interests of business. This means the driver has power on demand to meet any situation, while the owner profits from reduced fuel consumption.' ),
			new Vehiclemodel('6', '2232391', 'toyota', 'Dyna', 2014, 'dyna5.jpg', 'dyna4.jpg', 'dyna6.jpg', 'Dyna powerplants combine both power and economy in the best interests of business. This means the driver has power on demand to meet any situation, while the owner profits from reduced fuel consumption.' ),
			new Vehiclemodel('7', '22323823', 'toyota', 'Camry', 2016, 'camry2.png', 'camry.jpeg', 'camry3.png', 'Class-leading driving performance and fuel efficiency make full use of advanced technologies to create a driving experience that is both exhilarating and warmly satisfying. Reassurance grows with the knowledge that the Camry integrates the top levels of safety performance in its class to give you true peace of mind.' ),
			new Vehiclemodel('7', '223239145', 'toyota', 'Camry', 2017, 'camry5.png', 'camry4.jpg', 'camry6.jpg', 'Class-leading driving performance and fuel efficiency make full use of advanced technologies to create a driving experience that is both exhilarating and warmly satisfying. Reassurance grows with the knowledge that the Camry integrates the top levels of safety performance in its class to give you true peace of mind.' ),
			new Vehiclemodel('8', '11323823', 'toyota', 'Corolla', 2016, 'corolla1.png', 'corolla2.png', 'corolla3.png', 'Expect excitement to grow with every drive in Corolla. It’s all thanks to an inspiring combination of agile, sporty and responsive performance with superb fuel efficiency to match. Engines/Suspensions with compact, lightweight engine harnesses advanced technologies to deliver exhilarating performance and outstanding fuel economy. Optimizing various suspension components, together with the sure braking performance, helps realize excellent stability, control and ride comfort.' ),
			new Vehiclemodel('8', '243239145', 'toyota', 'Corolla', 2017, 'corolla6.png', 'corolla5.png', 'corolla4.jpeg', 'Expect excitement to grow with every drive in Corolla. It’s all thanks to an inspiring combination of agile, sporty and responsive performance with superb fuel efficiency to match. Engines/Suspensions with compact, lightweight engine harnesses advanced technologies to deliver exhilarating performance and outstanding fuel economy. Optimizing various suspension components, together with the sure braking performance, helps realize excellent stability, control and ride comfort.' ),
			new Vehiclemodel('9', '11320823', 'toyota', 'Yaris', 2016, 'yaris6.jpg', 'yaris5.jpg', 'yaris4.jpg', 'Reliably engineered both for performance and a sense of security. The suspension is designed to reduce vibration and enhance ride comfort. In addition, sound absorbing and vibration damping materials are adopted throughout the entire body, and acoustic glass with a three-layer structure is adopted for the windshield, helping reduce wind and road noise. These measures are part of an exhaustive effort to creat a quiet and comfortable cabin.' ),
			new Vehiclemodel('9', '2403239145', 'toyota', 'Yaris', 2017, 'yaris2.png', 'yaris1.jpeg', 'yaris3.png', 'Reliably engineered both for performance and a sense of security. The suspension is designed to reduce vibration and enhance ride comfort. In addition, sound absorbing and vibration damping materials are adopted throughout the entire body, and acoustic glass with a three-layer structure is adopted for the windshield, helping reduce wind and road noise. These measures are part of an exhaustive effort to creat a quiet and comfortable cabin.' ),
			new Vehiclemodel('10', '1011320823', 'toyota', 'Land Cruiser Prado', 2016, 'prado1.jpg', 'prado2.jpg', 'prado3.jpg', 'With a heritage that dates back over a half century, the Land Cruisers unrivalled off-road performance and durability have eared it a rock-solid reputation for reliability. And now-inheriting the pedigree of its predessors while simultareously realizing superior on-road performance and interior versatility at a high level- Land Cruiser Prado taken a major step forward' ),
			new Vehiclemodel('10', '203239145', 'toyota', 'Land Cruiser Prado', 2017, 'prado4.jpg', 'prado5.jpg', 'prado6.jpg', 'With a heritage that dates back over a half century, the Land Cruisers unrivalled off-road performance and durability have eared it a rock-solid reputation for reliability. And now-inheriting the pedigree of its predessors while simultareously realizing superior on-road performance and interior versatility at a high level- Land Cruiser Prado taken a major step forward' ),
			new Vehiclemodel('11', '10113020823', 'toyota', 'Rav4', 2016, 'rav1.png', 'rav2.png', 'rav3.jpg', 'The Rav4 comes equipped with an engine which provides execellent acceleration performanc from low speed that is matched by its fuel economy, clean emissions and quietnes' ),
			new Vehiclemodel('11', '2403294145', 'toyota', 'Rav4', 2017, 'rav4.jpg', 'rav5.jpg', 'rav6.jpg', 'The Rav4 comes equipped with an engine which provides execellent acceleration performanc from low speed that is matched by its fuel economy, clean emissions and quietnes' ),
			new Vehiclemodel('12', '101120823', 'toyota', 'Hiace', 2016, 'hiace1.jpg', 'hiace2.jpg', 'hiace3.JPG', 'HIACE incorporates both active and passive measures to help protect the driver and passengers. Visibility is excellent, and crumple zone construction helps minimize damage in the event of a collision. A front double-wishbone torsion bar spring suspension and a rear leaf spring suspension provide optimized straight line stability, ride comfort and versatile load-carrying capacity.' ),
			new Vehiclemodel('12', '2403291145', 'toyota', 'Hiace', 2017, 'hiace4.jpg', 'hiace5.jpg', 'hiace6.jpeg', 'HIACE incorporates both active and passive measures to help protect the driver and passengers. Visibility is excellent, and crumple zone construction helps minimize damage in the event of a collision. A front double-wishbone torsion bar spring suspension and a rear leaf spring suspension provide optimized straight line stability, ride comfort and versatile load-carrying capacity.' ),
			new Vehiclemodel('13', '1012082300', 'toyota', 'Hilux', 2016, 'hilux1.png', 'hilux2.jpg', 'hilux3.jpg', 'The Hilux comes with either a Petrol or Diesel engine. The petrol comes with VVT-i (Variable Valve Timing with intelligence) which helps deliver increased torque and output,execellent fuel economy and reduced emissions. The diesel engine features direct fuel injection by common rail into the cylinders which controls the air fuel ratio contributing to execellent response and fuel efficiency' ),
			new Vehiclemodel('13', '240329145', 'toyota', 'Hilux', 2017, 'hilux6.png', 'hilux5.jpg', 'hilux4.jpg', 'The Hilux comes with either a Petrol or Diesel engine. The petrol comes with VVT-i (Variable Valve Timing with intelligence) which helps deliver increased torque and output,execellent fuel economy and reduced emissions. The diesel engine features direct fuel injection by common rail into the cylinders which controls the air fuel ratio contributing to execellent response and fuel efficiency' ),
			new Vehiclemodel('14', '10122300', 'toyota', 'Landcruiser 70/Safari Pick up', 2016, 'safari1.png', 'safari2.png', 'safari3.png', 'The indestructible Land Cruiser 70 series surrenders to no challenge. It is built to perform and work so hard as you do, that is why it has been at the helm of Nigeria 4x4 motoring, for more than 60 years. The LC70 is the ultimate for the tough Nigeria environment and rugged roads, with the power and capacity to take charge of the most demanding conditions, with a full one -ton load this pick-up will go where ever you take it.' ),
			new Vehiclemodel('14', '2409145', 'toyota', 'Landcruiser 70/Safari Pick up', 2017, 'safari4.png', 'safari5.png', 'safari6.jpg', 'The indestructible Land Cruiser 70 series surrenders to no challenge. It is built to perform and work so hard as you do, that is why it has been at the helm of Nigeria 4x4 motoring, for more than 60 years. The LC70 is the ultimate for the tough Nigeria environment and rugged roads, with the power and capacity to take charge of the most demanding conditions, with a full one -ton load this pick-up will go where ever you take it.' )
		]


		this.sparepart = [
			new Sparepartquotation('Replacement A/C Compressor', 'rept191101_is.jpeg', '618387', 'A/C COMPRESSOR, NEW -- 1-groove belt; 0.5 in. belt width; 5.5 in. pulley diameter; 3.45 in. gauge line A; Pad mount manifold; Tangent mount; With clutch; A high quality, OE replacement A/C compressor; May require use of OE manifold; Backed by 1-year, unlimited-mileage warranty.', '68908387'),
			new Sparepartquotation('QUALITY-BUILT ALTERNATORS', 'mpa11201_is.jpeg', '11201', 'Quality-Builts alternators are engineered from the ground up to deliver unsurpassed reliability with each turn of the key. Quality-Built, a division of Motorcar Parts of America, is an automotive aftermarket brand of professional-quality starters and alternators Engineered and manufactured under strict QS-9000 standards to offer unsurpassed dependability for virtually every car on the road Durably constructed with premium components for maximum performance', '6811201'),
			new Sparepartquotation('Brake Disc', 'mpa11201_is.jpeg', 'JBR1127XPR', 'Replace your brakes with PowerStops Extreme Performance cross-drilled and slotted brake discs and make your driving experience more engaging', 'JBR1127XPR')
		]







	}
}