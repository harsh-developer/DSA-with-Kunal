const ps = require("prompt-sync");
const input = ps({sigint: true});

var a = parseFloat(input("Enter first number: "));
var b = parseFloat(input("Enter second number: "))
var sum = a + b;
var diff = (a - b);
var product = a*b;
var divide = a/b;
var answer = input("Enter which calculation you want: ")
if(answer == "sum"){
    console.log(sum);
}
if(answer == "diff"){
    console.log(diff);
}
if(answer == "product"){
    console.log(product);
}
if(answer == "divide"){
    console.log(divide);
}