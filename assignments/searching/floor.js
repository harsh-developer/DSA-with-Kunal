// Find the largest smaller element than k in a sorted array
// eg:- arr => [1, 2, 3, 4, 7, 9, 11, 15], target => 6
// output:- 4 (because it is the largest smaller element than the 6 in this array)
// eg:- arr => [1, 2, 3, 4, 7, 9, 11, 15], target => 4
// output:- 4 (because it is exactly equal to target)

function floor(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] > target){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return arr[end];
}
console.log(floor([1, 2, 4, 6, 7, 9, 11, 13, 14], 5))