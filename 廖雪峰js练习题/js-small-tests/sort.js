//note:Array的sort()方法默认把所有元素先转换为String再排序
//幸运的是，sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。要按数字大小排序，我们可以这么写：
'use strict'
var arr = [10,20,1,2];
arr.sort(function(x,y){
    if(x<y)
        return -1;
    else if(x>y)
        return 1;
    return 0;
});
console.log(arr);

//如果要倒序排序，我们可以把大的数放前面：
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]
console.log(arr);

//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象

