
function stocks(price){
    let minimum = Infinity;
    let maximum = -Infinity;
    for(let i = 0; i<price.length; i++){
        if(minimum > price[i]){
            minimum = price[i];
        }
        if(maximum < price[i] - minimum){
            maximum = price[i] - minimum
        }
    }
    return maximum;
}
console.log(stocks([7,1,5,3,6,4]))