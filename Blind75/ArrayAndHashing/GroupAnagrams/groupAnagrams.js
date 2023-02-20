/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let answer = [];
    let position = 0;
    for(let i = 0; i < strs.length; i++) {
        let split = strs[i].split("");
        split.sort();
        let join = split.join("");
        if(map.has(join)) {
            answer[map.get(join)].push(strs[i]);
        } else {
            map.set(join,position);
            answer.push([strs[i]]);
            position++;
        }
    }

    return answer;
};