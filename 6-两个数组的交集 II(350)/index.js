var intersect1 = function(nums1, nums2) {
    const newArr = [];
    nums2.forEach((item)=>{
        const index = nums1.indexOf(item);
        if(index != -1){
            const spliceTtem = nums1.splice(index,1);
            newArr.push(spliceTtem[0]);
        }
    })
    return newArr
};


var intersect2 = function(nums1, nums2) {
    var arr=[];
    nums1.map((el)=>{
        var index=nums2.indexOf(el);
        if(index>=0){
            arr.push(el);
            nums2.splice(index,1)
        }
    })
    return arr;
};


const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

const nums3 = [4,9,5];
const nums4 = [9,4,9,8,4];

console.log(intersect1(nums1, nums2));
console.log(intersect2(nums3, nums4));