// import { Combinable } from "./IntersectionTypeGuardingDiscriminatedTypesTypeCastingIndexedProperties";

type Combinable1 = string | number
// if block checks if the values are either string or number making it a type guard
function sum(a: number, b: number): number 
function sum(a: string, b: string): string 
function sum(a: string, b: number): string
function sum(a: number, b: string): string
function sum(a: Combinable1, b: Combinable1){
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
}
console.log(sum(2, 43));

// Optional Chaining
const fetchedUserData = {
    id: 2,
    name: 'John',
    job: { title: 'Software Developer', description: 'Full Stack' },
}

console.log(fetchedUserData?.job?.description);

// Nullish Coalescing
const userInput = null
const storeData = userInput ?? 'DEFAULT'
console.log(storeData); // DEFAULT

const userInput1  = 'Name'
const storeData1 = userInput1 ?? 'DEFAULT'
console.log(storeData1); // DEFAULT

