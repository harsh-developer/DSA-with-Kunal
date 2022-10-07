// Write a program to print the factorial of a number by defining a method named 'Factorial'.

function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }
    let factorial = 1;
    // let i = 0;
    while(num > 0){
        factorial =  factorial*num;
        num--
    }
    return factorial;
}
console.log(factorial(12))