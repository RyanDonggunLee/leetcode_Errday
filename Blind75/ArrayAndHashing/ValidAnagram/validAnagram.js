/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //input String들을 정렬시키기
    let arrayS = s.split("");
    arrayS.sort();
    let arrayT = t.split("");
    arrayT.sort();

    let length = Math.max(arrayS.length, arrayT.length);
    for(let i = 0; i < length; i++) { // 정렬된 알파벳 비교
        if(arrayS[i] != arrayT[i]) return false; // 값이 다를 때
    }

    return true; // 모두 일치할 때
};