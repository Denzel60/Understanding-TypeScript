"use strict";
class Department {
    //constructor
    constructor(n) {
        this.name = n;
    }
    //method
    describe() {
        console.log('Department:' + this.name);
    }
}
const accounting = new Department("accounting");
console.log(accounting);
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
