// Write a program to print the sum of negative numbers, sum of positive even numbers 
// and the sum of positive odd numbers from a list of numbers (N) entered by the user.

let list = [-12, -14, -6, -3, 7, 5, 12, 14, 6, 11, 15]
let negativeSum = 0;
let positiveOddSum = 0;
let positiveEvenSum = 0;
for(let i = 0; i<list.length; i++){
    if(list[i] < 0){
        negativeSum = negativeSum + list[i];
    }
    else if(list[i] > 0){
        if(list[i]%2 == 0){
            positiveEvenSum = positiveEvenSum + list[i];
        }
        else if(list[i]%2 != 0)[
            positiveOddSum = positiveOddSum + list[i]
        ]
    }
}
console.log("Sum of all negative numbers", negativeSum)
console.log("Sum of all positive even numbers",positiveEvenSum)
console.log("Sum of all positive even numbers" ,positiveOddSum)