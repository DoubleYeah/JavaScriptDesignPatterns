var myCar = {

    name: "Ford Escort",

    drive: function () {
       console.log("Weeee. I'm driving!");
    } ,

    panic: function () {
        console.log("Wait. How do you stop this thing?");
    }

};

//使用Object。create实例化一个新car
var yourCar = Object.create(myCar);

console.log(yourCar.name);

var vehicle = {
  getModel:  function() {
      console.log("The model of this vehicle" + this.model);
  }
};

var car = Object.create(vehicle, {
    "id": {
        value: "XXX",
        enumerable: true,
        configurable: true,
        writable: true
    },
    "model": {
        value: "Ford",
        enumberable: true,
        configurable: true,
        writable: true
    }
});

car.getModel();

//
// var vehiclePrototype = {
//
//     init: function(carModel){
//         this.model = carModel;
//     },
//
//     getModel: function(){
//         console.log("The model of this vehicle is .." + this.model);
//     }
//
// }
//
// function vehicle(model){
//
//     function F(){};
//     F.prototype = vehiclePrototype;
//
//     var f = new F();
//     f.init(model);
//     return f;
// }
//
// var car = vehicle("Ford Escort");
// car.getModel();
