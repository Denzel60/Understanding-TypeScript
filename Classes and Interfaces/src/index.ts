class Department{
    // public name: string;
    // public readonly id: number;
    private employees: string[] =  [];

    //constructor
    // readonly
    constructor(public name: string, private readonly id: string) {
        // this.name = n;
    }

    //method
    describe(this: Department) {
        console.log(`Department: ${this.id} ${this.name}`);
    }

    addEmployee(employees: string) {
        this.employees.push(employees)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, '23')
        this.admins = admins
    }
}
class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
        this.reports = reports
    }
    addReport(text: string){
        this.reports.push(text)
    }
    printReports(){
        console.log(this.reports);
    }
}

const accounting = new Department("accounting", '23')
const accounting1 = new ITDepartment( '23', ['Max'])
console.log(accounting);
console.log(accounting1);

// accounting.describe()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe();
accounting.printEmployeeInformation()

// accounting.employees[2] = 'Anne'

const accounting2 = new AccountingDepartment('d1', [])

accounting2.addReport('Something went wrong...')

accounting2.printReports()