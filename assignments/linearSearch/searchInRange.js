// Search in an index range of (x, y)
// in this x and y are the starting and ending point of range

// this is for array (number array and string array)
function searchInRange(arr, target, start, end){
    // i used  (i <= end) becase it is index not length of any array, so i need to include that index as well  
    for(let i = start; i<=end; i++){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}
console.log(searchInRange([1, 2, 3, 4, 5, 6, 7], 6, 0, 3))


// for strings
function searchInGivenRange(str, target, start, end){
    for(let i = start; i<= end; i++){
        if(target == str.charAt(i)){
            return true;
        }
    }
    return false;
}
console.log(searchInGivenRange("bengaluru", "u", 0, 7))