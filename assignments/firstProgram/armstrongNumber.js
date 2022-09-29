const ps = require("prompt-sync");
const input = ps({sigint: true});

// Check whether a given three digit number is amrstrong number or not

var num = parseInt(input("Enter a three digit number: "));
var temp = num
var remSum = 0;
while(temp > 0){
    let rem = Math.floor(temp%10);
    let cubeRem = rem*rem*rem;
    remSum += cubeRem;
    temp = Math.floor(temp/10)
}
if(num == remSum){
    console.log(`${num} is an armstrong number!`);
}
else{
    console.log(`${num} is not an armstrong number!`)
}