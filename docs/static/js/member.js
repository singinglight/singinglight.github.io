// 当.pop-up处于打开状态时，点击将其关闭
$('.pop-up').click(function(){
    $('.pop-up').removeClass('open');
});

$("#tyb").click(function(){
    $('.pop-up').removeClass('open');
    $('.tyb').addClass('open');
});
// 获取元素秒
const second = document.querySelector('.roll')
// 定义秒变量
let s = 0;
// 定义一个间歇函数，让时钟自己转动
let seconds = setInterval(function () {
    // 一个圆是360°，所以我们一秒应该转动6°
    s += 6
    // 如果大于等于360，s赋值为0，重新开始
    //过了60秒我们应该让分变量进一位，同样是6°
    if (s >= 360) {
        s = 0
    }
    // 给对应的时分秒改变rotate旋转度数。
    second.style.transform = `rotate(${s}deg)`
}, 100)