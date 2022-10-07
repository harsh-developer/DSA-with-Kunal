function majorityElement(nums){
    var frequency = new Map();
    for(let i = 0; i<nums.length; i++){
        if(frequency.get(nums[i])){
            frequency.set(nums[i], frequency.get(nums[i]) + 1);
        }else{
            frequency.set(nums[i], 1);
        }
    }
    let majorityFreq = 0;
    let majorityEle = 0;
    for(var pairs of frequency){
        if(pairs[1] > majorityFreq){
            majorityEle = pairs[0];
            majorityFreq = pairs[1];
        }
    }
    return majorityEle
}
console.log(majorityElement([2,2,1,1,1,2,2]))