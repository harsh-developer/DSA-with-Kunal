// Print nth Fibonacci Number

// Approach 1:- Using loop

// let num = 8;
// let prevNum = 0;
// let indx = 1;
// let count = 2;
// while(count <= num){
//     let temp = indx;
//     indx = indx+prevNum;
//     prevNum = temp;
//     count++;
// }
// console.log(indx);


// Another loop
let n = 8;
let a = 0;
let b = 1;
let sum = 0;
for(let i=2; i<=n; i++){
    sum = a+b;
    a = b;
    b = sum;
}
console.log(b)



// Approach 2:- Using Recursion

// function fibonacci(num){
//     if(num == 0){
//         return 0;
//     }
//     if(num == 1 || num == 2){
//         return 1;
//     }
//     let fiboo =  fibonacci(num-1) + fibonacci(num-2);
//     return fiboo;
// }
// console.log(fibonacci(8));