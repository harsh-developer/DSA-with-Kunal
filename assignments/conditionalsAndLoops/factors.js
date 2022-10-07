// Find all the factors of a number

let num = 100;
for(let i = 0; i<=num; i++){
    if(num%i == 0){
        console.log(i)
    }
}


// Approach 2:- using while loop
let number = 100;
let index = 0;
while(index <= number){
    if(number%index == 0){
        console.log(index);
    }
    index++
}