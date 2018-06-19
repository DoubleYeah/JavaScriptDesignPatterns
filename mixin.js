var Car = function (settings){
	this.model = settings.model || "no model provided";
	this.color = settings.color || "no color provided";
}

var Mixin = function (){};

Mixin.prototype = {
	driveForward: function() {
		console.log("drive forward");
	},
	driveBackward: function() {
		console.log("drive backward");
	},
	driveSideways: function() {
		console.log("drive sideways");
	}
}

Mixin.prototype.constructor = Mixin;

function augment(receivingClass, givingClass){

	if (arguments[2]){
		for (var i = 2; i < arguments.length ; i++){
			if (!Object.hasOwnProperty(receivingClass, arguments[i])){
				receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
			}
		}
	}
	else {
		for (var methodName in givingClass.prototype){
			if (!receivingClass.prototype[methodName]){
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
		}
	}
}

augment(Car, Mixin, "driveForward");

var myCar = new Car({
	model: "Fod Escort",
	color: "blue"
});

//>>drive forward
myCar.driveForward();

//no a function
//myCar.driveSideways();

augment(Car, Mixin);

//>>drive sideways
myCar.driveSideways();
