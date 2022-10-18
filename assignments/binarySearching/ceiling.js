// find smallest larger than or equal number to the target
// eg:- arr => [1, 2, 3, 4, 7, 9, 11, 15], target => 6
// output:- 7 (because 7 is the smallest larger element than 6 in this array)
// eg:- arr => [1, 2, 3, 4, 7, 9, 11, 15], target => 7
// output:- 7 (because this is equal to the target)

function ceiling(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == target){
            return arr[mid];
        }
        else if(arr[mid] > target){
            end =  mid - 1;
        }
        else{
            start = mid + 1
        }
    }
    return arr[start];
}
console.log(ceiling([1, 2, 4, 6, 7, 9, 11, 13, 14], 14))