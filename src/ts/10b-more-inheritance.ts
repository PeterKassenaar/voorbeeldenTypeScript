class Vehicle {
	hasWheels: boolean = true;
	honkHorn() {
		// console.log('TOOOOOT');
		return 'TOOOOOT';
	}
}
class Auto extends Vehicle {
	numWheels: number = 4;
}

class Truck extends Vehicle {
	numWheels: number = 8;
}

let auto = new Auto();
let vrachtwagen = new Truck();
console.log('Numwheels of auto:', auto.numWheels);

auto.numWheels = 12;
console.log('Numwheels of truck:', vrachtwagen.numWheels);
console.log('Auto says:', auto.honkHorn());
console.log('truck zegt:', vrachtwagen.honkHorn());
