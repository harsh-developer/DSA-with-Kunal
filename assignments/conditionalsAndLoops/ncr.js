// Calculate nCr 

let n = 5;
let r = 2;
let factN = 1;
let factR = 1;
let factNandR = 1;
for (let i = n; i > 0; i--) {
    factN = factN * i;
}

for (let i = r; i > 0; i--) {
    factR = factR * i;
}
for (let i = n - r; i > 0; i--) {
    factNandR = factNandR * i
}

let nCr = factN / (factR * factNandR)
console.log(nCr);