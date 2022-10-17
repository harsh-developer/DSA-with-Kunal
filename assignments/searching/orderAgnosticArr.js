// Order Agnostic Binary Search

function orderAgnosticBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        if (arr[start] < arr[end]) {
            let mid = Math.floor(start + (end - start) / 2);
            if (arr[mid] == target) {
                return mid;
            }
            else if (arr[mid] > target) {
                end = mid - 1;
            }
            else {
                start = mid + 1
            }
        }
        else {
            let mid = Math.floor(start - (start - end) / 2);
            if (arr[mid] == target) {
                return mid;
            }
            else if (arr[mid] > target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
console.log(orderAgnosticBinarySearch([39, 35, 32, 28, 24, 22, 21, 19, 17, 13, 8, 6, 3, 1, 0], 45))
// console.log(orderAgnosticBinarySearch([0, 1, 3, 6, 8, 13, 17, 19, 21, 28, 30], 0))