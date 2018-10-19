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
        cookie[name] = vale;
    }
    return cookie;
}

wx.chosseImage()
{
    success(res)
    {
        const tempFilePaths = res.tempFilePaths;//的每一项是一个本地临时文件的路径
    }
}

//变量
wx.onShareAppMessage()
{
    //用户点击了"转发"按钮
    title: "转发表情";
}


function getCookie() {
    var cookie = {};
    var all = document.cookie;
    if (cookie === "") {
        return cookie;
    }
    var lits = all.split(";")
    for (var i = 0; i < lits.length; i++) {
        var cookie = lits[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var vale = cookie.substring(p + 1);
        vale = encodeURIComponent(vale);
        cookie[name] = value;
    }
    return cookie;
}













































