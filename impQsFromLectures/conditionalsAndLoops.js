// If/ else

// Lets understand this concept with the help of an example
// In if/else condition only one condition executes at a time

let salary = 95000;
if(salary > 80000){
    salary = salary + 5000
}
else{
    salary = salary + 3000;
}
console.log(salary);

// If we want to add more than one if conditions
// In javascript we can add multiple if conditions wihout having any else condition, and the program will check for each and every if condition, to avoid this we have another syntax called else if

if(salary > 80000){
    salary = salary + 5000;
}
if(salary < 80000){
    salary =  salary + 10000;
}
// if(salary)