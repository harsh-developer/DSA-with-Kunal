// Find square root for number n
// NOTE This code is for perfect square only;

let num = 35;
let i = 0;
function findSqrt(num, i){
    while(i*i <= num){
        if(i*i == num){
            return i;
        }
        i++
    }
    return "Can't find a perfect square!"
}
console.log(findSqrt(num, i))