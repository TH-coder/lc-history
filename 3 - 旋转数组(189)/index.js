var rotate1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        const num = nums.pop();
        nums.unshift(num)
    }
};


var rotate2 = function (nums, k) {
    const length = nums.length;
    if (length === k || length === 1) {
        return nums
    } else {
        if (length < k) {
            k = k % length
        }
        nums.unshift(...nums.splice(-k, k));
    }
};

var rotate3 = function (nums, k) {
    let l = nums.length;
    k %= l;
    nums.unshift(...nums.splice(nums.length - k, k))
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate1(arr1,k)
rotate2(arr2,k);
rotate3(arr3,k);
console.log(arr1);
console.log(arr2);
console.log(arr3);