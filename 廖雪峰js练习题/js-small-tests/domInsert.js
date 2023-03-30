//练习:对于一个已有的HTML结构：
/*
<!-- HTML结构 -->
<ol id="test-list">
    <li class="lang">Scheme</li>
    <li class="lang">JavaScript</li>
    <li class="lang">Python</li>
    <li class="lang">Ruby</li>
    <li class="lang">Haskell</li>
</ol>
*/
//按字符串顺序重新排序DOM节点：
'use strict';
// todo:sort list
var list = document.getElementById('test-list');
var arr = [];
for(let i=0;i<list.children.length;i++)
{
    arr[i]=list.children[i].innerText; //把DOM节点中文本遍历存到数组中，利用数组自身的排序方法排序，之后按顺序更改DOM节点文本内容即可
}
arr.sort();
for(let i=0;i<list.children.length;i++)
{
    list.children[i].innerText=arr[i];
}
// 测试:
;(function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 5) {
        arr = [];
        for (i=0; i<t.children.length; i++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
            console.log('测试通过!');
        }
        else {
            console.log('测试失败: ' + arr.toString());
        }
    }
    else {
        console.log('测试失败!');
    }
})();