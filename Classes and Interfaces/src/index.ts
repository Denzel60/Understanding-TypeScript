class Department{
    name: string;

    //constructor
    constructor(n: string) {
        this.name = n;
    }

    //method
    describe(this: Department) {
        console.log('Department:' + this.name);
    }
}

const accounting = new Department("accounting")
console.log(accounting);

const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
accountingCopy.describe()
