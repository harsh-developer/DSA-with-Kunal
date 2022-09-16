const ps = require("prompt-sync");
const input = ps({sigint: true});

var INR = parseFloat(input("Enter amount in INR: "))
var USD = INR/80
console.log(`Rs ${INR} in USD is $${USD}`);