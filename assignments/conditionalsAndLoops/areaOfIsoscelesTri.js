// Calculate area of isosceles triangle
// Isosceles triangle means... in which 2 sides are equal out of 3

let s1 = s2 = 10;
let s3 = 20;
let height =  null;
let area = null;

if(s1 && s2 && s3 && height){
    area = (height*s3)/2;
}
else if(s1 && s2 && s3){
    height = (s1*s2)/s3;
    area = (height*s3)/2;
}
console.log(area);