// Keep taking integer inputs till the user enters 0 and print the sum of all numbers

const ps = require("prompt-sync");
const input = ps({sigint:true});

let number = parseInt(input("Please enter a number: "))
let sum = 0;
let flag = true;
while(flag == true){
    sum = sum + number;
    if(number === 0){
        console.log(sum);
        flag = false;
    }
}