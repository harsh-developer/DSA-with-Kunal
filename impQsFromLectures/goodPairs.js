// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function countGoodPairs(arr){
    let output = 0;
    let count = new Map();
    for(let i = 0; i<arr.length; i++){
        if(count.has(arr[i])){
            if(count.get(arr[i]) < i){
                output++;
            }
        }
        else{
            count.set(arr[i], i);
        }
    }
    return output;
}
console.log(countGoodPairs([1,2,3,1,1,3]));