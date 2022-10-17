// Apply binary search in an array sorted in descending order

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor(start - (start - end) / 2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] > target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([30, 28, 25, 24, 22, 18, 15, 12, 9, 7, 5, 3, 2, 1, 0], 18))