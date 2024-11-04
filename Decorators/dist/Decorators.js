"use strict";
/* Decorator */
// function Logger(constructor: Function) {
//     console.log(constructor);
//     console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Decorator factory */
function Logger(logstring) {
    return function (constructor) {
        console.log(logstring);
        console.log(constructor);
    };
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
function withTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById('hookId');
                // const p = new originalConstructor()
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
                ;
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating a person...');
    }
};
Person = __decorate([
    Logger("LOGGING PERSON"),
    withTemplate('<h1>My person project</h1>', 'app')
], Person);
// const pers = new Person()
// console.log(pers);
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator');
    console.log(target, name, descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method Decorator');
    console.log(target, name, descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target, name, position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - Should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax / 100);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
