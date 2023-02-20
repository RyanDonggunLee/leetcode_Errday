/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) { //문제 이해를 잘 할 것
    if(nums.length == 0) return 0;
    let longestConsecutive = 1;
    let consecutive = 1;
    nums.sort((a,b) => a-b); //sort 없이 set 이용해서 for loop 안에서 while 돌려서도 가능
    console.log(nums);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i-1] != nums[i]) {
            if(nums[i-1] + 1 == nums[i]) {
                consecutive += 1;
                if(consecutive > longestConsecutive) longestConsecutive = consecutive;
            } else {
                consecutive = 1;
            }
        }
    }
    return longestConsecutive;
};