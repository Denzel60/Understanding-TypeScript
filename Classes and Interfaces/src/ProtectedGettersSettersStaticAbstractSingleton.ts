abstract class Department1{
    // public name: string;
    // public readonly id: number;
    static fiscalYear = 2020;
    protected employees: string[] =  [];

    //constructor
    // readonly
    constructor(public name: string, protected readonly id: string) {
        // this.name = n;
    }

    static createEmployee(name: string){
        return {name: name}
    }

    //method
    // describe(this: Department1) {
    //     console.log(`Department1: ${this.id} ${this.name}`);
    // }
    abstract describe(this: Department1): void;

    addEmployee(employees: string) {
        this.employees.push(employees)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment1 extends Department1{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, '23')
        this.admins = admins
    }
    describe() {
        console.log('ITDepartment - ID' + this.id);
    }
    addAdmin(text: string){
        this.admins.push(text);
    }
    getAdmins() {
        console.log(`Admins ${this.admins}`);
    }
}
class AccountingDepartment1 extends Department1{
    private lastReport: string;
    private static instance: AccountingDepartment1;

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
        this.reports = reports
        this.lastReport = reports[0]
    }

    static getInstance() {
        // if(this.instance) {}
        if(AccountingDepartment1.instance) {
            return AccountingDepartment1.instance
        }
        this.instance = new AccountingDepartment1('d2', []);
        return this.instance
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return `Report: ${this.lastReport}`;
        }
        throw new Error('No report found')
    }

    set mostRecentReport (value:string) {
        if(!value){
            throw new Error('Please add a valid value')
        }
        this.lastReport = value
    }

    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text;
    }
    printReports(){
        console.log(this.reports);
    }
}

const employee1 = Department1.createEmployee('Max')
console.log(employee1, Department1.fiscalYear);

// const accounting3 = new AccountingDepartment1('d3', [])
const accounting4 = AccountingDepartment1.getInstance()
const accounting5 = AccountingDepartment1.getInstance()

console.log(accounting4, accounting5);

const it = new ITDepartment1('d3', ['Account'])

it.addAdmin('Help')

console.log(it.getAdmins());

// accounting3.addReport(`Something went wrong...`)
// accounting3.addEmployee('Max')
// accounting3.addEmployee('Manu')

// accounting3.printEmployeeInformation()

// console.log( accounting3.mostRecentReport );
// accounting3.mostRecentReport = 'Year End Report'
// accounting3.printReports();
// accounting3.describe()






