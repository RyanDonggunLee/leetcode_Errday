/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target-nums[i]) && map.get(target-nums[i]) !== i) {
            return [i, map.get(target-nums[i])];
        }
    }
    // for loop 을 따로 두개를 돌릴 필요가 없었음. 한개로 돌리면서 if(!map.has()) map.set() 로 진행하면 런타임 세이브.
};