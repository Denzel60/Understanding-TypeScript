"use strict";
// import { Combinable } from "./IntersectionTypeGuardingDiscriminatedTypesTypeCastingIndexedProperties";
var _a;
function sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(sum(2, 43));
// Optional Chaining
const fetchedUserData = {
    id: 2,
    name: 'John',
    job: { title: 'Software Developer', description: 'Full Stack' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
// Nullish Coalescing
const userInput = null;
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData); // DEFAULT
const userInput1 = 'Name';
const storeData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'DEFAULT';
console.log(storeData1); // DEFAULT
