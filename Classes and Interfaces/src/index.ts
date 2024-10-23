class Department{
    public name: string;
    private employees: string[] =  [];

    //constructor
    constructor(n: string) {
        this.name = n;
    }

    //method
    describe(this: Department) {
        console.log('Department:' + this.name);
    }

    addEmployee(employees: string) {
        this.employees.push(employees)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("accounting")
console.log(accounting);

// accounting.describe()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe();
accounting.printEmployeeInformation()

// accounting.employees[2] = 'Anne'
