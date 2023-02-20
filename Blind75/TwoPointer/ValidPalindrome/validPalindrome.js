/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) { //non-alphanumeric character 를 regex로 없애는게 핵심
    let char = s.replace(/[^a-zA-Z\d]/g,""); //regex로 alphanumeric 을 제외한 다른 character 없앰
    char = char.toLowerCase(); //모두 lowercase로 바꿈
    const palindrome = char.split("");

    let start = 0;
    let end = palindrome.length - 1;

    while(start < end) { // two pointer
        if(palindrome[start] != palindrome[end]) return false;
        start ++;
        end --;
    }

    return true;
};