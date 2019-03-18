var maxProfit1 = function(prices) {
    return prices.reduce((sum,item,index,arr)=>{
        if(arr[index+1] > item){
            return sum + (arr[index+1] - item)
        }else{
            return sum
        }
    },0);
};

var maxProfit2 = function(prices) {
    if(prices.length <= 1) return 0;
    return prices.reduce((sum,item,index,arr)=>{
        const num = arr[index+1] - item;
        return sum + (num>0?num:0)
    },0);
};

var maxProfit3 = function(prices) {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            max += prices[i] - prices[i - 1]
        }
    }
    return max
};

const arr = [7,1,5,3,6,4];
console.log(maxProfit1(arr));
console.log(maxProfit2(arr));
console.log(maxProfit3(arr));