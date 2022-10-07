// Calculate factorial of a number

let num = 10;
let factorial = 1;
for(let i = num; i>0; i--){
    factorial = factorial*i
}
console.log(factorial);


// Using while loop

let number = 10;
let factorial1 = 1;
while(number>0){
    factorial1 = factorial1*number
    number--
}
console.log(factorial1)