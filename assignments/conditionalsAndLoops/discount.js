// Count discount of product

let price = 7999;
let discount = null;
if(price <= 1000){
    discount = (price*5)/100;
}
if(price <= 2000){
    discount = (price*10)/100;
}
if(price <= 3000){
    discount = (price*12)/100;
}
if(price <= 4000){
    discount = (price*15)/100;
}
if(price <= 5000){
    discount = (price*18)/100;
}
if(price > 5000){
    discount = (price*20)/100;
}
console.log("Discount:- Rs. " + discount);
console.log("Product price after discount:- Rs. " + (price-discount));