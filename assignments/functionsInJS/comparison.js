// A person is eligible to vote if his/her age is greater than or equal to 18. 
// Define a method to find out if he/she is eligible to vote.

function eligibleForVoting(age){
    if(age >= 18){
        return `You are eligible for voting!`
    }
    else if(age < 18){
        return `You are not eligible for voting!`
    }
    else{
        return `${age} is not a valid input!`
    }
}
console.log(eligibleForVoting(17))