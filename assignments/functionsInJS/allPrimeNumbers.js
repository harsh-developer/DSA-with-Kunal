// Write a function that returns all prime numbers between two given numbers.

function printAllPrime(a, b){
    function checkPrime(num){
        if(num ==2){
            return true
        }
        let i = 2;
        while(i<num){
            if(num%i == 0){
                return false
            }
            i++
        }
        return true;
    }
    let answer = [];
    for(let i = a; i<=b; i++){
        if(checkPrime(i)){
            answer.push(i);
        }
    }
    return answer;
}
console.log(printAllPrime(3, 200))