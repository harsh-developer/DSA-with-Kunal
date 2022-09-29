// Count the occurrence of digit k in a number

let num = 1723747217237;
let k = 7;
let occurrence = 0;
while(num > 0){
    let rem = num%10;
    if(rem == 7){
        occurrence++;
    }
    num = Math.floor(num/10);
}
console.log(occurrence)