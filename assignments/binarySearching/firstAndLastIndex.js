function firstAndLastPosition(nums, target){
    let ans = [-1, -1];
    let start = binarySearch(nums, target, true)
    let end = binarySearch(nums, target, false)
    ans[0] = start;
    ans[1] = end;
    return ans;

    /** we can do one more thing
     * ans[0] = binarySearch(nums, target, true)
     * here we are checking if ans[0] != 1 then and only then check for ans[1] otherwise return [-1, -1]
     * if(ans[0] != -1){
     *      ans[1] = binarySearch(nums, target, false)
     * }
     * return ans;
     */
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
            // possible answer is found
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