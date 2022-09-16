const ps = require("prompt-sync");
const input = ps({sigint: true});

let principal = parseFloat(input("Enter principal amount: "));
let time = parseFloat(input("Enter time: "));
let rate = parseFloat(input("Enter rate: "));
let simpleInterest = (principal*time*rate)/100;
console.log("Simple interest for given input is", simpleInterest);