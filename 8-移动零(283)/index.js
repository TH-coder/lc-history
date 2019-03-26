var moveZeroes1 = function(nums) {
    const flag = loop(nums);
    for (var i = 0; i < flag; i++) {
        nums.push(0)
    }
};

function loop(nums,flag = 0){
    const index = nums.indexOf(0);
    if(index!==-1){
        nums.splice(index,1);
        flag++;
        return loop(nums, flag);
    }else{
        return flag
    }
}

var moveZeroes2 = function (nums) {
    var num = 0;
    while (nums.indexOf(0) !== -1 && nums.indexOf(0) < (nums.length - 1 - num)) {
        num++;
        nums.splice(nums.indexOf(0), 1);
        nums.push(0)
    }
};

var moveZeroes3 = function(nums) {
    var i=0, j=0;
    for(; j<nums.length; j++) {
        if(nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }
    for (; i < j; i++) {
        nums[i] = 0;
    }
    return nums;
};

const arr1 = [0,1,0,3,12];
const arr2 = [0,1,0,3,12];
const arr3 = [0,1,0,3,12];

moveZeroes1(arr1);
moveZeroes2(arr2);
moveZeroes3(arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);