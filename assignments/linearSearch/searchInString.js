// Search for a target in a string

function searchInString(str, target){
    for(let i = 0; i<str.length; i++){
        if(target == str.charAt(i)){
            return true;
        }
    }
    return false;
}
console.log(searchInString("meerut", "a"))