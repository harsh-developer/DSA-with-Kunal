const ps = require("prompt-sync");
const input = ps({sigint: true});

var a = parseFloat(input("Enter first number: "));
var b = parseFloat(input("Enter second number: "));
if(a > b)[
    console.log(`${a} is the larger than ${b}`)
]
else{
    console.log(`${b} is larger than ${a}`);
}