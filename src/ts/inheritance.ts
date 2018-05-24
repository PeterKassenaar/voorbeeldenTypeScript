class Voertuig{
    hasWheels: boolean = true;
    honkHorn(){
        // console.log('TOOOOOT');
        return 'TOOOOOT';
    }
}
class Auto extends Voertuig{
    numWheels:number = 4
}

class Vrachtwagen extends Voertuig{
    numWheels:number = 8;
}

let auto = new Auto();
let vrachtwagen = new Vrachtwagen();
console.log('Numwheels van auto:', auto.numWheels);

auto.numWheels = 12;
console.log('Numwheels van vrachwagen:', vrachtwagen.numWheels);
console.log('Auto zegt:', auto.honkHorn());
console.log('Vrachtwagen zegt:', vrachtwagen.honkHorn());
