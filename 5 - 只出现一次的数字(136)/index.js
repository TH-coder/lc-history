var singleNumber1 = function(nums) {
    nums.sort();
    let num = 0;
    for (let i = 0; i < nums.length; i+=2) {
        if(i === nums.length-1){
            num = nums[i];
            break;
        }
        if(nums[i] !== nums[i+1]){
            num =  nums[i];
            break;
        }
    }
    return num;
};

var singleNumber2 = function (nums) {
    nums.sort();
    return two(nums);
};

function two(nums) {
    if (nums.length === 1)return nums[0];
    let i = parseInt((nums.length - 1) / 2);
    const oddFlag = i % 2 !== 0;
    if (oddFlag) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(0, i + 1);
            return two(nums);
        } else if (i === 0 || nums[i + 1] !== nums[i]) {
            return nums[i]
        } else {
            nums.splice(i , nums.length - i );
            return two(nums);
        }
    } else {
        if (nums[i] === nums[i + 1]) {
            nums.splice(0, i + 2);
            return two(nums);
        } else if (i === 0 || nums[i - 1] !== nums[i]) {
            return nums[i]
        } else {
            nums.splice(i + 1, nums.length - i - 1);
            return two(nums);
        }
    }
}

var singleNumber3 = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[0] = nums[0] ^ nums[i];
    }
    return nums[0];
};

const arr1 = [4,1,2,1,2];
const arr2 = [4,1,2,1,2];
const arr3 = [4,1,2,1,2];

console.log(singleNumber1(arr1));
console.log(singleNumber2(arr2));
console.log(singleNumber3(arr3));