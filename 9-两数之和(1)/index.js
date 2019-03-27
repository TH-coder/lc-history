var twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const indexArr = [];
        const objP = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const objC = nums[j];
            if(objP+objC === target){
                indexArr[0] = i;
                indexArr[1] = j;
                break;
            }
        }
        if(indexArr[1]){
            return indexArr;
        }
    }
};

var twoSum2 = function(nums, target) {
    let i=0,j=nums.length-1;
    const arr = [...nums];
    nums.sort((a,b)=>(a-b));
    for (; i < j; i++) {
        while (nums[i]+nums[j] >target){
            j--
        }
        if(nums[i]+nums[j] === target){
            return [arr.indexOf(nums[i]),arr.lastIndexOf(nums[j])]
        }
    }
};

console.log(twoSum1([2, 7, 11, 15],9));
console.log(twoSum2([2, 7, 11, 15],9));
