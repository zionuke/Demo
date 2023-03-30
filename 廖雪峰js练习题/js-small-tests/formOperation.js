    // TODO:练习题答案如下，因缺少html文档无法单独运行，重点是运用正则匹配
    var username=document.getElementById('username');
    var password=document.getElementById('password');
    var repeat=document.getElementById('password-2');
    var re1 = /[0-9a-zA-Z]{3,10}/;
    var re2 = /.{6,20}/;
    if(!re1.test(username.value)||!re2.test(password.value)||password.value!==repeat.value)
    {
    alert("please recheck your password or username!");
    return false;
    }  
    return true;
    }