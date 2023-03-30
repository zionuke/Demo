//练习1：利用reduce()求积：
'use strict';

function product(arr) {
    return arr.reduce(function(x,y){return x*y;});
}
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

//练习2：不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数
function string2int(s) {
    //这里关键是str.split('')把字符串分割为单个字母的元素数组
    return s.split('').map((x)=>x*1).reduce(function(x,y){return x*10+y;});
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}

//练习3：请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
    return arr.map(x=>x[0].toUpperCase()+x.substring(1).toLowerCase());
}
// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

//练习4：小明希望利用map()把字符串变成整数，他写的代码很简洁：
var arr = ['1', '2', '3'];
var r;
//r = arr.map(parseInt);
r = arr.map(Number);
console.log(r);
//结果竟然是1, NaN, NaN，小明百思不得其解，请帮他找到原因并修正代码。
/*
由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，通常我们仅需要第一个参数，而忽略了传入的后面两个参数。不幸的是，parseInt(string, radix)没有忽略第二个参数，导致实际执行的函数分别是：

    parseInt('1', 0); // 1, 按十进制转换

    parseInt('2', 1); // NaN, 没有一进制

    parseInt('3', 2); // NaN, 按二进制转换不允许出现3

可以改为r = arr.map(Number);，因为Number(value)函数仅接收一个参数。
*/