Function.prototype.implementsFor = function(parentClassObject){
	if (parentClassObject.constructor === Function){

		//正常继承
		this.prototype = new parentClassObject();
		this.prototype.constructor = this;
		this.prototype.parent = parentClassObject;
	}
	else{

		//虚拟继承
		this.prototype = parentClassObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassObject;
	}
}


var CoffeeOrder = {
	
	//接口
	serveCoffee: function (context) {},
	getFlavor: function () {}
};

//实现
function CoffeeFlavor(newFlavor){

	var flavor = newFlavor;

	//如果已经为某一功能定义了接口，则实现该功能
	if (typeof this.getFlavor === "function"){
		this.getFlavor = function (){
			return flavor;
		};
	}

	if (typeof this.serveCoffee === "function"){
		this.serveCoffee = function(context){
			console.log("Serving Coffee flavor "
				+ flavor 
				+ " to table number "
				+ context.getTable());
		};
	}
}

//为CoffeeOrder实现接口
CoffeeFlavor.implementsFor(CoffeeOrder);

//处理coffee订单的table数
function CoffeeOrderContext(tablenumber){
	return {
		getTable: function(){
			return tablenumber;
		}
	};
}

//享元工厂
function CoffeeFlavorFactory(){
	var flavors = [];

	return {
		getCoffeeFlavor: function(flavorName){

			var flavor = flavors[falvorName];
			if (flavor === undefined){
				flavor = new CoffeeFlavor(falvorName);
				flavor[flavorName] = flavor;
			}
		},

		getTotalCoffeeFlavorsMade: function() {
			return flavors.length;
		}
	}
}

function testFlyweight(){

	//已订购的flavor
	var flavors = {},

	//订单table
	tables = {},

	//订单数
	ordersMade = 0,

	flavorFactory = new CoffeeFlavorFactory();

	function takeOrder(flavorin, table){
		flavors[ordersMade] = new CoffeeFlavor(flavorin);
		tables[ordersMade++] = new CoffeeOrderContext(table);
	}

	takeOrder("Cappuccion", 2);
	takeOrder("Xpresso", 775);
	takeOrder("Cappuccion", 78);
	takeOrder("Xpresso", 533);


	takeOrder("Frappe", 123);
	takeOrder("Frappe", 466);
	takeOrder("Cappuccion", 46);
	takeOrder("Frappe", 23);
	takeOrder("Cappuccion", 53);

	takeOrder("zz", 56);
	takeOrder("zz", 57);
	takeOrder("zz", 58);

	for (var i = 0; i < ordersMade; i++){
		flavors[i].serveCoffee(tables[i])
	}

}

testFlyweight();