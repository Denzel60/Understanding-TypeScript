type Admin = {
    name: string;
    priviledges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    priviledges: ['Create-server'],
    startDate: new Date
}

// type universal shares number from Combinable and Numeric making it an Intersection type
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;
// if block checks if the values are either string or number making it a type guard 
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
}

type unknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: unknownEmployee) {
    console.log('Name:' + ' ' + emp.name);
    if('priviledges' in emp){
        console.log('Priviledges:' + ' ' + emp.priviledges)
    }  
    if('startDate' in emp){
        console.log('Start Date:' + ' ' + emp.startDate)
    }  
}
printEmployeeInformation(e1)
printEmployeeInformation({name: 'Manu', startDate: new Date})

// Type Guarding classes
class Car {
    drive () {
        console.log('Driving...');
    }
}
class Truck {
    drive () {
        console.log('Driving a truck...');
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: vehicle) {
    vehicle.drive()
    // if('loadCargo' in vehicle) {
    if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
    }
}
useVehicle(v1)
useVehicle(v2)

// Discriminated Unions
interface Bird {
    type: 'Bird'
    flyingSpeed: number
}
interface Horse {
    type: 'Horse'
    runningSpeed: number 
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
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
moveAnimal({type: 'Bird', flyingSpeed: 10})

// Type-casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// const userInputElement = document.getElementById('user-input')!  as HTMLInputElement
const userInputElement = document.getElementById('user-input')

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there'
    // userInputElement.value = 'Hi there'
}

// Index Properties
interface ErrorContainer {
    [prop: string]: string
}

const ErrorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'must be at least 3 characters long',
}