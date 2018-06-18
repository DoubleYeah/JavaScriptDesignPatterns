function Car(options){
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}

function Truck(options){
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
}

function VehicleFactory(){}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options){
	if (options.vahicleType == "car"){
		this.vehicleClass = Car;
	}
	else if(options.vehicleType == "Truck"){
		this.vehicleClass = Truck;
	}

	return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
	vehicleType: "car",
	color: "yellow",
	doors: 6
})

console.log(car instanceof Car);


var truck = carFactory.createVehicle({
	vehicleType: "Truck",
	state: "like new",
	color: "red",
	wheelSize: "small"
});

console.log(truck instanceof Truck);


//TruckFactory

function TruckFactory(){}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;


