// Define a program to find out whether a given number is even or odd.

function oddEven(num){
    if(num%2 == 0){
        return `${num} is an even number!`
    }
    else if(num%2 == 1){
        return `${num} is an odd number!`
    }
    else{
        return `${num} is not a valid input!`
    }
}

console.log(oddEven(5.876572))