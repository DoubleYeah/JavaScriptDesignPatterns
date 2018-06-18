var  AbstractFactory = (function(){
	var types = {};
	return {
		getVehicle: function(type, customizations){
			var Vehicle = types[type];
			return (Vehicle) ? new Vehicle(customizations) : null;
		},
		registerVehicle: function (type, Vehicle){
			var proto = Vehicle.prototype;

			//只注册实现车辆方法的类
			if (proto.drive && proto.breakDown){
				types[type] = Vehicle;
			}
			console.warn(this);
			return AbstractFactory;
		}
	}
})();

function Car (){}
Car.prototype.drive = function (){console.log("dirve")};
Car.prototype.breakDown = function (){console.log("breakDown")};


AbstractFactory.registerVehicle("car", Car);