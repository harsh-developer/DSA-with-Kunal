// Calculate nth power of number num
let num = 5;
let n = 4;
let answer = 1;
for(let i = 0; i<n; i++){
    answer = answer*num
}
console.log(answer);


// Solution using recursion
function power (num, n){
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return  num;
    }
    return num * power(num, n-1);
}
console.log(power(num, n))