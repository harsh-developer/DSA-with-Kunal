// Write a program that will ask the user to enter his/her marks (out of 100). 
// Define a method that will display grades according to the marks entered as below:
/*
Marks        Grade 
91-100         AA 
81-90          AB 
71-80          BB 
61-70          BC 
51-60          CD 
41-50          DD 
<=40          Fail
*/

function grading(marks){
    if(marks <= 100 && marks > 90){
        return "You got grade AA!"
    }
    else if(marks <= 90 && marks > 80){
        return "You got grade AB!"
    }
    else if(marks <= 80 && marks >70){
        return "You got grade BB!"
    }
    else if(marks <= 70 && marks >60){
        return "You got grade BC!"
    }
    else if(marks <= 60 && marks > 50){
        return "You got grade CD"
    }
    else if(marks <= 50 && marks > 40){
        return "You got grade DD!"
    }
    else if(marks <= 40){
        return "You are fail!"
    }
}
console.log(grading(97))