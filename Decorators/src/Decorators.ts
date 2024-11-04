/* Decorator */
// function Logger(constructor: Function) {
//     console.log(constructor);
//     console.log(constructor);
// }

/* Decorator factory */
function Logger(logstring: string) {
    return function(constructor: Function){
        console.log(logstring);
        console.log(constructor);
    }
}

// function withTemplate(template: string, hookId: string) {
//     return function(constructor: any) {
//         const hookEl = document.getElementById('hookId')
//         const p = new constructor()
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;
//         };
//     }
// }

function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new(...args: any[]): {name: string} }> (originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super()
                console.log('Rendering template');
                const hookEl = document.getElementById('hookId')
                // const p = new originalConstructor()
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                };
            }
        }
    }
}

@Logger("LOGGING PERSON")

@withTemplate('<h1>My person project</h1>', 'app')
class Person{
    name = 'Max'

    constructor(){
        console.log('Creating a person...');
    }
}

// const pers = new Person()
// console.log(pers);

function Log(target:any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor ) {
    console.log('Accessor Decorator');
    console.log(target, name, descriptor);
} 

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor ) {
    console.log('Method Decorator');
    console.log(target, name, descriptor);
} 

function Log4(target: any, name: string | Symbol, position: number ) {
    console.log('Parameter Decorator');
    console.log(target, name, position);
} 

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - Should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax / 100)
    }
}
