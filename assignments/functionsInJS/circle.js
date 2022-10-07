// Write a program to print the circumference and area of a circle of radius entered by user

function circle(radius){
    let area = Math.PI*(radius*radius)
    let circumference = Math.PI*(2*radius)
    return [area, circumference]; 
}
console.log(circle(10))