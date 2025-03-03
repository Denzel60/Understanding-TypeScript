"use strict";
class Department {
    //constructor
    // readonly
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // public name: string;
        // public readonly id: number;
        this.employees = [];
        // this.name = n;
    }
    //method
    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, '23');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new Department("accounting", '23');
const accounting1 = new ITDepartment('23', ['Max']);
console.log(accounting);
console.log(accounting1);
// accounting.describe()
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe()
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
accounting.printEmployeeInformation();
// accounting.employees[2] = 'Anne'
const accounting2 = new AccountingDepartment('d1', []);
accounting2.addReport('Something went wrong...');
accounting2.printReports();
