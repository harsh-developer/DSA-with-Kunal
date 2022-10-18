// Find peak in mountain array
// mountain array:- An array of at least 3 length, half is sorted in ascending order and another half is
// sorted in descending array

function peakElement(arr){
    let start = 0;
    let end = arr.length -1;
    while(start < end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] < arr[mid + 1]){
            // in this condition, we are in ascending part of array
            // I am re-assigning start as mid +1 because I know that mid + 1 element > mid element
            // so the answer will lie in between mid + 1 and end. 
            start = mid + 1;
        }
        else{
            // in this condition, we are in decreasing part of array
            // this mid may be the answer, but still looking at left
            // this is why I didn't re-assigned end != mid -1;
            end = mid;
        }
    }
    // in the end, start == end, and pointing to the largest number because of the 2 checks above
    // start and end are always trying to find max element in the above 2 checks
    // hence we can say, when they are pointing to just one element, that is the maximum one because
    // that is what the checks say
    // more elaboration:- at every point of time for start and end, they have thhe best possob;e answer till
    // that time
    // and if we are saying that only one item is remaining, hence because of above line that is the best
    // possible answer;
    return start;
}
console.log(peakElement([1, 2, 4, 6, 5, 3, 1, 0]));