//练习 请尝试用filter()筛选出素数
'use strict';
//我用的遍历法，别的算法之后有空再研究
function get_primes(arr){
    return arr.filter(function(element,index,self){
        var i = 1;
        if(element==1)
            return false;
        while(++i<element)
        {
            if(element%i == 0)
                return false;
        }
        return true;
    });
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}