// Calculate npr

let n = 5;
let r = 2;
let factoN = 1;
let factoNandR = 1;
for(let i = n; i>0; i--){
    factoN = factoN * i;
}
for(let i = n-r; i>0; i--){
    factoNandR = factoNandR * i;
}
let nPr = factoN / factoNandR;
console.log(nPr);