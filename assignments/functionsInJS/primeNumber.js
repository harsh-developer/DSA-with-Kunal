// Define a method to find out if a number is prime or not

function checkPrime(num){
    if(num ==2){
        return `${num} is a prime number!`
    }
    let i = 2;
    while(i<num){
        if(num%i == 0){
            return `${num} is not a prime number!`
        }
        i++
    }
    return `${num} is a prime number!`
}
console.log(checkPrime(5))