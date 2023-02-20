/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) { // 기본 개념 : 중복 없이 3 수의 합이 0이 되는 값을 찾는다.
    nums.sort((a,b) => a-b);
    console.log(nums);
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    console.log(map);
    const answer = [];
    console.log(map.get(17));
    for(let i = 0; i < nums.length-2; i++) {
        while(nums[i]==nums[i-1]) i++; // 중복 답 피하기
        for(let j =i+1; j < nums.length-1; j++) {
            let target = -nums[i]-nums[j];
            if(map.has(target) && map.get(target) > j) {
                answer.push([nums[i],nums[j],target]);
            }
            while(nums[j]==nums[j+1]) j++; // 중복 답 피하기
        }
    }
    return answer;
    //runtime 과 Memory 관리 더 할 것....
};