// Generic types
const names: Array<string> = []
const names1: Array<string | number> = []

// Promises and Generics 
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 2000)
})
promise.then((value) => {
    console.log(value)
})

// // Generic functions
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// const mergedObj = merge({ a: 1 }, { b: 2 });

// Generic functions with constraints and type casting
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ a: 1 }, { b: 2 });
console.log(mergedObj.b);

// Generic functions and interfaces
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value'
    if (element.length === 1) {
        descriptionText = `Got 1 value`
    } else if (element.length > 1){
        descriptionText = `Got ${element.length} element(s)`
    }
    return [element, descriptionText]
}
console.log(countAndDescribe("Lorem Ipsum. Hi there"));

// Generic functions with keyof 
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'value' + obj[key];
}
extractAndConvert({name: 'Max'}, 'name')