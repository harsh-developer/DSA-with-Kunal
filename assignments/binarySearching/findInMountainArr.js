// find target element k in a mountain array

function findInMountainArray(arr, target){
    let peak = peakIndexInMountainArr(arr);
    let firstTry = orderAgnosticbinarySearch(arr, target, 0, peak);
    if(firstTry != -1){
        return firstTry;
    }
    return orderAgnosticbinarySearch(arr, target, peak + 1, arr.length - 1);
}

function peakIndexInMountainArr(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] < arr[mid +1]){
            start = mid + 1
        }
        else{
            end = mid;
        }
    }
    return start;
}

function orderAgnosticbinarySearch(arr, target, start, end){
    while(start <= end){
        if(arr[start] < arr[end]){
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
        else{
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

    }
    return -1;
}
console.log(findInMountainArray([1,2,3,4,5,3,1], 6))