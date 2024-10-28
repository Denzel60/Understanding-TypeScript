"use strict";
const e1 = {
    name: 'Max',
    priviledges: ['Create-server'],
    startDate: new Date
};
// if block checks if the values are either string or number making it a type guard 
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name:' + ' ' + emp.name);
    if ('priviledges' in emp) {
        console.log('Priviledges:' + ' ' + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('Start Date:' + ' ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date });
// Type Guarding classes
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed' + speed);
}
moveAnimal({ type: 'Bird', flyingSpeed: 10 });
// Type-casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// const userInputElement = document.getElementById('user-input')!  as HTMLInputElement
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
    // userInputElement.value = 'Hi there'
}
const ErrorBag = {
    email: 'Not a valid email',
    username: 'must be at least 3 characters long',
};
