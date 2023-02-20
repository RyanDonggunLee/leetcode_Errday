/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { //중복 알파벳 찾으면 그 알파벳 이후로 다시 길이를 재는게 중요
    if(s == "") return 0; //
    let start = 0; //윈도우 시작 위치
    let longestSubstr = 0; //길이
    let map = new Map(); //중복 확인을 위한 Map
    
    let string = s.split("");

    for(let i = 0; i < string.length; i++) {//중복이 존재할때
        if(map.has(string[i]) && map.get(string[i]) >= start) {
            start = map.get(string[i]) + 1; //중복 위치 다음으로 start 위치 변경
            map.set(string[i], i); //중복 갱신
        } else { //중복 없을 시
            map.set(string[i], i);
            if(longestSubstr < i - start + 1) {
                longestSubstr = i - start + 1;
            }
        }
    }
    return longestSubstr;
};