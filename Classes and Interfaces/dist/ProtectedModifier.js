"use strict";
class Department1 {
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
        console.log(`Department1: ${this.id} ${this.name}`);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment1 extends Department1 {
    constructor(id, admins) {
        super(id, '23');
        this.admins = admins;
    }
}
class AccountingDepartment1 extends Department1 {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
