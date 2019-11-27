var removeDuplicates1 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums.lastIndexOf(nums[i]) !== i){
            nums.splice(i,1)
        }
    }
    return nums.length
};
/*
用java的方式
class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length <= 1)return nums.length;
        int times = 0;
        for(int i = 1;i<nums.length;i++){
            while(nums[i] == nums[i-1]){
                nums[i] = nums[nums.length-1]+1;
                Arrays.sort(nums);
                times++;
            }
        }
        return nums.length - times;
    }
}
*/


var removeDuplicates2 = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    nums.forEach((item, index, arr)=>{
        //既然是排序数组,那么当前item只要和下一个item不一样,那说明当前item是唯一的,一样,那就删除掉好了
        while(item === arr[index+1]){
            arr.splice(index+1, 1)
        }
    });
    return nums.length
};

var removeDuplicates3 = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

const arr1 = [1,1,2,2,3,3,4,4,4,5,5,6,6,7,8,9];
const arr2 = [1,1,2,2,3,3,4,4,4,5,5,6,6,7,8,9];
const arr3 = [1,1,2,2,3,3,4,4,4,5,5,6,6,7,8,9];

console.log(removeDuplicates1(arr1));
console.log(removeDuplicates2(arr2));
console.log(removeDuplicates3(arr3));

console.log(arr1);
console.log(arr2);
console.log(arr3);