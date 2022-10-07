// Calculate the average of n numbers

let numbers = [10, 13, 14, 16, 26, 47, 23];
let average = null;
let sum = 0;
for(let i = 0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
average = sum/numbers.length;
console.log(average.toFixed(3));