// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

function shuffle (nums, n) {
    let output = [];
    let i = 0;
    for(let j = 0; j<n; j++){
        output[i] = nums[j];
        i += 2;
    }
    i = 1;
    for(let j = n; j<nums.length; j++){
        output[i] = nums[j];
        i += 2;
    }
    return output;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3))