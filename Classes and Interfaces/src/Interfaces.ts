// type Addfn = (a: number, b: number) => void;

interface Addfn {
    (a: number, b: number): number;
}

let add: Addfn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named{
    readonly name?: string;
    outName?: string
}

// interface Greetable{
interface Greetable extends Named{
    greet(phrase: string): void;
}

// class Person implements Greetable, Named {
class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string){
        if(n) this.name = n;
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

// let user1: Person;

// user1 = {
//     name: 'John',
//     age: 30,

//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// user1.greet('Hi there - I am')

let user1: Greetable;
user1 = new Person('Max')
user1.greet('Hi there - I am')
console.log(user1);
