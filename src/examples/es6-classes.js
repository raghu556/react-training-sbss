class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    fly() {
        console.log(this.name + " is flying");
    }

    static getCompanyName() {
        console.log("New company");
    }
}

Drone.maxHeight = 200; // static method

var drone = new Drone("D123", "Flyer");
console.log(typeof drone);
console.log(drone.id, drone.name);
drone.fly();

Drone.getCompanyName(); // Static method should be called by classname hence can't be called by drone object
console.log(Drone.maxHeight);
console.log(drone.maxHeight); // will give undefined as maxHeight is static varible

class Vehicle {
    constructor(id, name, licenseNo) {
        console.log('Vehicle Constructor');
        this.id = id;
        this.name = name;
        this.licenseNo = licenseNo;
    }

    start() {
        console.log('Vehicle Started');
    }
}

class Car extends Vehicle {
    constructor(id, name, licenseNo) {
        super(id, name, licenseNo);
        this.maxWeight = 1000;
        console.log('Car Constructor');
    }

    start() {
        super.start();
        console.log('Car Start Method');
    }
}

var car = new Car("C001", "ferrari", "MH05FFF1233");
console.log(car.id, car.name, car.licenseNo);
car.start();