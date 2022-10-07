// check for a number, is it perfect or not

let number = 6;
let sum = 1; // because 1 devides every number
for(let i = 2; i*i <= number; i++){
    if(number%i == 0){
        if(i*i != number){
            sum = sum + i + number/i;
        }
        else{
            sum = sum + i;
        }
    }
}
if(sum == number && sum != 1){
    console.log(true);
}
else{
    console.log(false);
}
