// Calculate electricity bill according to these conditions
// 1 to 100 units – Rs. 10/unit
// 100 to 200 units – Rs. 15/unit
// 200 to 300 units – Rs. 20/unit
// above 300 units – Rs. 25/unit

let units = 250;
let electricityBill = null;
if(units <= 100){
    electricityBill = units*10;
}
else if(units <=200){
    electricityBill = 100*10 + (units-100)*15;
}
else if(units <= 300){
    electricityBill = 100*10 + 100*15 + (units-200)*20
}
else if(units > 300){
    electricityBill = 100*10 + 100*15 + 100*20 + (units-300)*25
}
console.log(`Electricity bill of ${units} is Rs ${electricityBill}.`)