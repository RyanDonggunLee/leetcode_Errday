/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map(); //set 으로 대체가능 * set 과 map 의 차이
    let answer = false;
    nums.forEach(num => { //각 element 값들 비교 확인
        if(map.has(num)) { // 중복값이 있는지 확인
            answer = true; //return true 가 안됨
        } else {
            map.set(num); //중복 값 없으면 map에 저장
        }
    })
    return answer;
};