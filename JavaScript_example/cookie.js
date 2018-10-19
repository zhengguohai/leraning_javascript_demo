// /*2018.10.14读取cookie*/
// //将document.cookie的值以名/值对组成一个对象返回
// //假设存储的cookie的值的时候，是采用endcodeURLComponent()函数编码的
// function getcookie() {
//     var cookie = {}; //初始化最后要返回的对象
//     var all = document.cookie; //在一个大写字符串获取所有的cookie值
//     /*`===` 严格相等，会比较两个值的类型和值`==`  抽象相等，比较时，会先进行类型转换，然后再比较值*/
//     if (all === "") {    //如果该cookie属性值获取所有的cookie的值
//         return cookie;  //返回一个空对象
//     }
//     ;
//     var list = all.split(";"); //为了能够读取这个cookie的值是使用split方法给分离出 名/值对
//     for (var i = 0; i < list.length; i++) {
//         //遍历每个cookie的值直到不小于这个list的长度的时候就会执行下一行的判断的值
//         var cookie = list[i]; //
//         var p = cookie.indexOf("="); //查找第一个"="符号
//         var name = cookie.substring(0, p); //获取cookie的名字
//         var vale = cookie.substring(p + 1); //获取cookie对应的值
//         vale = decodeURIComponent(vale); //对获取这个cookie的值进行解码
//         cookie[name] = value; //将名/值对存储到对象当中
//     }
//     return cookie;
// }

/*以上就是获取这个cookie的值的方法写出来*/

function getcookie() {
    var cookie = {};
    var all = document.cookie;
    if (cookie === "") {
        return cookie;
    }
    ;
    var list = all.split(";");
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var vale = cookie.substring(p + 1);
        vale = encodeURIComponent(vale);
        cookie[name] = value;
    }
    return cookie;
}


function getCookie() {
    var cookie = {};
    var all = document.cookie;
    if (cookie === "") {
        return cookie;
    }
    var list = all.split(";");
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var vale = cookie.substring(p + 1);
        vale = encodeURIComponent(vale);
        cookie[name] = value;
    }
    return cookie;
}


function getcookie() {
    var cookie = {};
    var all = documen.cookie;
    if (cookie === "") {
        return cookie;
    }
    var list = all.split(";");
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var vale = cookie.substring(p + 1);
        vale = encodeURIComponent(vale);
        cookie[name] = value;
    }
    return cookie;
}


//获取读取cookie的值单独写一个方法
function getcookie() {
    var cookie = {};
    var all = document.cookie;
    if (cookie === "") {
        return cookie;
    }
    var list = all.split(";");
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var vale = cookie.substring(p + 1);
        vale = encodeURIComponent(vale);
        cookie[name] = value;
    }
    return cookie;
}










































