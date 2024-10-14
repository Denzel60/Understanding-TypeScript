// union types
function combine(input1: number | string, input2: number | string) {
    let result
    if (input1  === 'number' && input2 === 'number') {
        result =  input1 + input2;
    } else {
        result =  input1.toString() + input2.toString();
    }
    return result;
}

let combineAges = combine(20, 30);
console.log(combineAges);

let combineNames = combine('Denzel', 'Lawrence');
console.log(combineNames);

// Literal types
function combine1(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result
    if (input1  === 'number' && input2 === 'number' || resultConversion === 'as-number') {
        result =  +input1 + +input2;
    } else {
        result =  input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //    return +result;
    // } else {
    //    result.toString(); 
    // }
    return result;
}

let combineAges1 = combine(20, 30);
console.log(combineAges);

let combineNames2 = combine('Denzel', 'Lawrence');
console.log(combineNames)

// Type Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine2(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result
    if (input1  === 'number' && input2 === 'number' || resultConversion === 'as-number') {
        result =  +input1 + +input2;
    } else {
        result =  input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //    return +result;
    // } else {
    //    result.toString(); 
    // }
    return result;
}

let combineAges2 = combine(20, 30);
console.log(combineAges);

let combineNames3 = combine('Denzel', 'Lawrence');
console.log(combineNames)

