"use strict";
console.log("Hello");
const arr = (a, b, ...c) => {
    console.log(a, b, c);
};
arr(34, 'str', 222223, 23332, 23333);
