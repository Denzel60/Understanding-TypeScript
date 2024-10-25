"use strict";
class Department1 {
    //constructor
    // readonly
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// public name: string;
// public readonly id: number;
Department1.fiscalYear = 2020;
class ITDepartment1 extends Department1 {
    constructor(id, admins) {
        super(id, '23');
        this.admins = admins;
    }
    describe() {
        console.log('ITDepartment - ID' + this.id);
    }
    addAdmin(text) {
        this.admins.push(text);
    }
    getAdmins() {
        console.log(`Admins ${this.admins}`);
    }
}
class AccountingDepartment1 extends Department1 {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        // if(this.instance) {}
        if (AccountingDepartment1.instance) {
            return AccountingDepartment1.instance;
        }
        this.instance = new AccountingDepartment1('d2', []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return `Report: ${this.lastReport}`;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please add a valid value');
        }
        this.lastReport = value;
    }
    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }
    addEmployee(name) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department1.createEmployee('Max');
console.log(employee1, Department1.fiscalYear);
// const accounting3 = new AccountingDepartment1('d3', [])
const accounting4 = AccountingDepartment1.getInstance();
const accounting5 = AccountingDepartment1.getInstance();
console.log(accounting4, accounting5);
const it = new ITDepartment1('d3', ['Account']);
it.addAdmin('Help');
console.log(it.getAdmins());
// accounting3.addReport(`Something went wrong...`)
// accounting3.addEmployee('Max')
// accounting3.addEmployee('Manu')
// accounting3.printEmployeeInformation()
// console.log( accounting3.mostRecentReport );
// accounting3.mostRecentReport = 'Year End Report'
// accounting3.printReports();
// accounting3.describe()
