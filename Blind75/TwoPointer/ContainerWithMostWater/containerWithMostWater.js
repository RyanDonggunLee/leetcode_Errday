/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {//최대 값(넓이)을 구하기 위해서는 양쪽에서 포인터를 움직이면서 비교하며 찾아봐야한다.
    let max = 0;
    let left = 0; 
    let right = height.length-1;
    while(left < right) { //O(N)
        let lineHeight = 0;
        if(height[left] > height[right]) {
            lineHeight = height[right];
        } else {
            lineHeight = height[left];
        }
        let water = lineHeight * (right - left);
        if(water > max) {
            max = water;
        }

        if (height[left] > height[right]) {
            right --;
        } else {
            left ++;
        }
    }
    return max;
    //Runtime은 작게 나왔는데 Memory 사용량이 많았다. Built-in object(Math)를 사용하면 Memory를 줄일 수 있다.
};