var plusOne = function (digits) {
    if (digits.length > 15) {
        const multiple = Math.ceil(digits.length / 15);
        const newArr = [];
        for (let i = 0; i < multiple; i++) {
            newArr.push(digits.slice(i * 15, (i + 1) * 15))
        }
        for (var i = newArr.length - 1; i >= 0; i--) {
            const arr = newArr[i];
            const length = arr.length;
            const num = parseInt(arr.join(''));
            const zeroNum = length - num.toString().length;
            if ((times('0',zeroNum)+((num+1).toString())).length === length) {
                newArr[i] = (times('0',zeroNum)+(num+1).toString()).split('');
                break;
            }else{
                if(i === 0){
                    newArr[i] = (num+1).toString().substring(0).split('');
                }else{
                    newArr[i] = (num+1).toString().substring(1).split('');
                }
            }
        }
        return newArr.reduce(function (arr,item) {
            return arr.concat(item)
        },[]);
    } else {
        const num = parseInt(digits.join(''));
        return (num + 1).toString().split('');
    }
};

function times(str, num){
    return new Array(parseInt(num)+1).join(str);
}


var plusOne2 = function (digits) {
    if(digits.length>15){
        for (let i = digits.length-1; i >= 0; i--) {
            if (digits[i] === 9) {
                digits[i] = 0;
                if (i === 0) {
                    digits.unshift(1)
                }
            } else {
                digits[i] += 1;
                break;
            }
        }
        return digits
    }else{
        const num = parseInt(digits.join(''));
        return (num + 1).toString().split('');
    }
};

var plusOne3 = function(digits) {
    var count = digits.length-1
    var plusNum = digits[count] = digits[count] + 1
    while(plusNum>=10){
        digits[count] = 0
        var count = count - 1
        if(count < 0){
            digits.unshift(1)
            break
        }
        plusNum = digits[count] = digits[count] + 1
    }
    return digits
};

const arr1 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
const arr2 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
const arr3 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
console.log(plusOne(arr1));
console.log(plusOne2(arr2));
console.log(plusOne3(arr3));