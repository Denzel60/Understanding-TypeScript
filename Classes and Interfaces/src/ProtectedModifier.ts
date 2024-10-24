class Department1{
    // public name: string;
    // public readonly id: number;
    protected employees: string[] =  [];

    //constructor
    // readonly
    constructor(public name: string, private readonly id: string) {
        // this.name = n;
    }

    //method
    describe(this: Department1) {
        console.log(`Department1: ${this.id} ${this.name}`);
    }

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
}
class AccountingDepartment1 extends Department1{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
        this.reports = reports
    }
    addEmployee(name: string) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text: string){
        this.reports.push(text)
    }
    printReports(){
        console.log(this.reports);
    }
}

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation()

