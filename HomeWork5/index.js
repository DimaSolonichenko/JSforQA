// Ex.1 Rewrite function with Class syntax
function createCar(brand, model, speed) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Create a Car object using the class syntax
class Car {
    constructor (brand = '', model ='', speed = 0){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    status = () => {
        return `${this.brand} ${this.model} running at ${this.speed} km/h`
    }
    accelerate = (amount) => {
        this.speed += amount;
    }
    brake = (amount) => {
        this.speed -= amount;
    }
}

const car = new Car("Renault", "Scenic", 60); // should dispay new object

console.log(car); // Should return new object
console.log(car.status()); // Renault Scenic running at 60 km/h 
car.brake(4);
console.log(car.status());
car.accelerate(150);
console.log(car.status());


// Ex.2 Create additinal class CarColor, exteds it from the Car class and add new method carColor() into this class
// Then return brand model and car color
class CarColor extends Car{
    
    constructor (brand, model, color){
        super(brand, model);
        this.color = color;
    }
    carColor = () => {
        return `${this.brand} ${this.model} has ${this.color} color`
    }
}
const carColor = new CarColor("Renault", "Scenic", "Red");

console.log(carColor); // should display new object
console.log(carColor.carColor()); // Should display string "Renault Scenic has Red color"