function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number){
    console.log("Result", num);
} 
printResult(add(2,4))

// Function as a type
let sum: Function;

let addNumber1: (n1: number, n2:number) => number;

// Function Types and Callback
function addAndHandle(n1: number, n2: number, cb:(num: number)=>void){
    const result = n1 + n2;
    cb(result)
}

addAndHandle(20, 20, (result)=>{
    console.log(result);
});
