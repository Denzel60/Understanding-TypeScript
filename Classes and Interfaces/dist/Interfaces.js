"use strict";
// type Addfn = (a: number, b: number) => void;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// class Person implements Greetable, Named {
class Person {
    constructor(n) {
        this.age = 30;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
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
let user1;
user1 = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1);
