//练习1: 请尝试写一个验证Email地址的正则表达式。版本一应该可以验证出类似的Email：
'use strict';
var re = /^[0-9a-zA-Z\.\_]+\@[0-9a-zA-Z]+\.?(com|org)$/; //最后表示或用()而不是[]
// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}
//版本二可以验证并提取出带名字的Email地址：
var re = /^\<([a-z\s{1}A-Z]+)\>\s([a-zA-Z]+\@[0-9a-zA-Z]+\.?\w+)$/; //这里用(com|org)估计是会多匹配一个，所以去掉括号
// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
}
else {
    console.log('测试成功!');
}