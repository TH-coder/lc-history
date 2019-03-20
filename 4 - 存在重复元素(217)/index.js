let containsDuplicate1 = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = true;
        } else {
            return true;
        }
    }

    return false;
};


let containsDuplicate2 = function(nums) {
    return new Set(nums).size !== nums.length
};
const arr = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate1(arr));
console.log(containsDuplicate2(arr));
