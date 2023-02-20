/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { // Sliding window 개념 알고 가기
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i = 0; i < prices.length; i++) { // 날짜 순으로 정렬되어있어 앞으로 쭉 지나가며 계산하는 방식이므로 pointer가 두개일 필요는 없다.
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }

        if((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
    //Memory를 줄이는 방법 더 생각해보기
};