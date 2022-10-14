function firstAndLastPosition(nums, target){
    let ans = [-1, -1];
    let start = binarySearch(nums, target, true)
    let end = binarySearch(nums, target, false)
    ans[0] = start;
    ans[1] = end;
    return ans;
}

function binarySearch(nums, target, findStartIndex){
    let ans = -1
    let start = 0;
    let end = nums.length -1;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if( nums[mid] > target){
            end = mid - 1
        }
        else if(nums[mid] < target){
            start = mid + 1
        }
        else{
            // possible answer id found
            ans = mid;
            if(findStartIndex){
                end = mid - 1;
            }
            else{
                start = mid+1;
            }
        }
    }
    return ans;
}

console.log(firstAndLastPosition([2, 4, 4, 5, 7, 7, 7, 7, 7, 7, 8, 10], 7))