var array = ["left", "center", "right", "p1", "p2", "p3"];
var timer = setInterval(function() {
    rightmove();
}, 5000); //自动翻页函数，每隔5秒往右翻页

function rightmove() {
    for (var i = 0; i < array.length; i++) {
        $(".btn").eq(i).css("background-color", "rgb(230, 230, 230)");
    } //每个按钮颜色初始化
    array.unshift(array[5]); //把数组的最后一张图片添加到第一个位置，即array[0]
    array.pop(); //删除最后一张图片
    for (var i = 0; i < array.length; i++) {
        $("#ul>li").eq(i).attr("class", array[i]);
    } //重新给li添加类名
    for (var i = 0; i < array.length; i++) {
        if ($("#ul>li").eq(i).attr("class") == "center") {
            $(".btn").eq(i).css("background-color", "red");
        } //图片居中时，下方按钮变为红色
    }
}

function leftmove() {
    for (var i = 0; i < array.length; i++) {
        $(".btn").eq(i).css("background-color ", "rgb(230, 230, 230)");
    } //每个按钮颜色初始化
    array.push(array[0]); //把数组的第一张图片添加到最后一个位置，即array[5]
    array.shift(); //删除第一个元素
    for (var i = 0; i < array.length; i++) {
        $("#ul>li").eq(i).attr("class", array[i]);
    } //重新给li添加类名
    for (var i = 0; i < array.length; i++) {
        if ($("#ul>li").eq(i).attr("class") == "center") {
            $(".btn").eq(i).css("background-color", "red");
        } //图片居中时，下方按钮变为红色
    }
}

for (var i = 0; i < array.length; i++) {
    (function(i) {
        $("#ul>li").eq(i).click(function() {
            if ($("#ul>li").eq(i).attr("class") == "left") {
                leftmove();
            } else if ($("#ul>li").eq(i).attr("class") == "right") {
                rightmove();
            } else {
                return false;
            }
        }); //鼠标点击图片进行切换
        $(".btn").eq(i).mouseover(function() {
            $(".btn").eq(i).css("background-color", "red");
            clearInterval(timer);
            while (array[i] != "center") {
                rightmove();
            }
        }); //鼠标覆盖按钮时
        $(".btn").eq(i).mouseout(function() {
            $(".btn").eq(i).css("background-color", "rgb(230, 230, 230)");
            clearInterval(timer);
            timer = setInterval(function() {
                rightmove();
            }, 5000);
        }); //鼠标移出按钮时
    })(i);
}

$(".last").click(function() {
    clearInterval(timer);
    rightmove();
    timer = setInterval(function() {
        rightmove();
    }, 5000);
}); //鼠标点击右箭头时
$(".next").click(function() {
    clearInterval(timer);
    leftmove();
    timer = setInterval(function() {
        rightmove();
    }, 5000);
}); //鼠标点击左箭头时
$("#content").mouseover(function() {
    $(".last,.next").css("display", "block");
    clearInterval(timer);
}); //鼠标覆盖图片时
$("#content").mouseout(function() {
    $(".last,.next").css("display", "none");
    clearInterval(timer);
    timer = setInterval(function() {
        rightmove();
    }, 5000);
}); //鼠标移出图片时