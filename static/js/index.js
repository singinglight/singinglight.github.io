(function() {
    new WOW().init()
})()
// 获取元素秒
const second = document.querySelector('.point')
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
}, 500)
// clock
// $(document).ready(function(){
//   const point = $('#point');
//   let rotation = 0;

//   $(window).scroll(function(){
//     rotation = ($(window).scrollTop() / $(window).height()) * 360;
//     point.css('transform', 'rotate(' + rotation + 'deg)');
//   });
// });
// computer
$(function () {
    // 初始化controller
    var controller = new ScrollMagic.Controller();

    var tween3 = new TimelineMax()
        .add(TweenMax.from($("#item1"), 2, {scale: 0, ease: "elastic.out(1, 0.8)"}));

    // var animation = gsap.from("#computer img", { duration: 1, ease: "elastic.out(1, 0.8)", scale: 0, delay: 0.6 });

    // 动画位置确定
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 1200,
        offset: 0
    }).setTween(tween3).addTo(controller);
})

// phone
$(function () {
    // 初始化controller
    var controller = new ScrollMagic.Controller();

    var tween3 = new TimelineMax()
        .add(TweenMax.from($("#item2"), 2, {scale: 0, ease: "elastic.out(1, 0.8)"}));

    // var animation = gsap.from("#computer img", { duration: 1, ease: "elastic.out(1, 0.8)", scale: 0, delay: 0.6 });

    // 动画位置确定
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 1200,
        offset: 0
    }).setTween(tween3).addTo(controller);
})

// flightpath
$(function () {
  var flightpath1 = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 10 },
        { x: -100, y: 200 },
      ]
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 400 }
      ]
    }
  };
  var flightpath2 = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 10 },
        { x: 0, y: 200 },
      ]
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 400 }
      ]
    }
  };
  var flightpath3 = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 10 },
        { x: 100, y:200 },
      ]
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 400 }
      ]
    }
  };
  // 初始化ScrollMagic控制器
  var controller_car = new ScrollMagic.Controller();
  // 创建动画
  var tween1 = new TimelineMax()
      // .add(TweenMax.fromTo($("#item3"), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}))
      // .add(TweenMax.fromTo($("#item4"), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}), 0)
      // .add(TweenMax.fromTo($("#item5"), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}), 0)	变清晰
      .add(TweenMax.to($("#item3"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#item4"), 1, { css: { bezier: flightpath2.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#item5"), 1, { css: { bezier: flightpath3.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#item3"), 2, { css: { bezier: flightpath1.leave}, ease: Power1.easeInOut }), 2)
      .add(TweenMax.to($("#item4"), 2, { css: { bezier: flightpath3.leave}, ease: Power1.easeInOut }), 2)
      .add(TweenMax.to($("#item5"), 2, { css: { bezier: flightpath3.leave}, ease: Power1.easeInOut }), 2)
      // .add(TweenMax.fromTo($("#item3"), 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeInOut}), 3)
      // .add(TweenMax.fromTo($("#item4"), 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeInOut}), 3)
      // .add(TweenMax.fromTo($("#item5"), 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeInOut}), 3);  变模糊
  // 创建场景
  var scene_car = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 600, offset: 250 })
    .setTween(tween1)
    .addTo(controller_car);
});

// colorchange
// $(function () {
//     // 初始化controller
//     var controller = new ScrollMagic.Controller();


//     var tween1 = TweenMax.to($("#item3"), 1, {backgroundImage: "url('img/component4.png')", ease: "elastic.out(1, 0.8)"});
//     var tween2 = TweenMax.to($("#item4"), 1, {backgroundImage: "url('img/component5.png')", ease: "elastic.out(1, 0.8)"});
//     var tween3 = TweenMax.to($("#item5"), 1, {backgroundImage: "url('img/component6.png')", ease: "elastic.out(1, 0.8)"});

//     var scene1 = new ScrollMagic.Scene({
//         triggerElement: "#trigger4",
//         duration: 600,
//         offset: 0
//     }).setTween(tween1).addTo(controller);

//     var scene2 = new ScrollMagic.Scene({
//         triggerElement: "#trigger4",
//         duration: 600,
//         offset: 0
//     }).setTween(tween2).addTo(controller);

// 	var scene3 = new ScrollMagic.Scene({
// 	    triggerElement: "#trigger4",
// 	    duration: 600,
// 	    offset: 0
// 	}).setTween(tween3).addTo(controller);
// })

// light appearance
$(function () {
    var flightpath1 = {
      entry: {
        curviness: 1.25,
        autoRotate: false,
        values: [
          { x: 0, y: 10 },
          { x: 0, y: 300 },
        ]
      }
    };
    // 初始化controller
    var controller = new ScrollMagic.Controller();


    // 创建动画
    var tween1 = new TimelineMax()
        .add(TweenMax.to($("#idea"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }));
    // 创建场景
    var scene_car = new ScrollMagic.Scene({ triggerElement: "#trigger4", duration: 400, offset: 250 })
      .setTween(tween1)
      .addTo(controller);
})

// elements
$(function () {
  var flightpath1 = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 10 },
        { x: 100, y: 20 },
        { x: 200, y: 20 },
        { x: 300, y: 100 },
        { x: 300, y: 200 }
      ]
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 300, y: 400 }
      ]
    }
  };
  // 初始化ScrollMagic控制器
  var controller_car = new ScrollMagic.Controller();
  // 创建动画
  var tween1 = new TimelineMax()
      .add(TweenMax.to($("#coal"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#coal"), 1, { css: { bezier: flightpath1.leave}, ease: Power1.easeInOut }), 2)
  // 创建场景
  var scene_car = new ScrollMagic.Scene({ triggerElement: "#trigger5", duration: 400, offset: 100 })
    .setTween(tween1)
    .addTo(controller_car);
});

// balls
$(function () {
  var flightpath1 = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 0, y: 10 },
        { x: 0, y: 150 }
      ]
    }
  };
  // 初始化ScrollMagic控制器
  var controller_car = new ScrollMagic.Controller();
  // 创建动画
  var tween1 = new TimelineMax()
      .add(TweenMax.to($("#ball1"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#ball2"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#ball3"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#ball4"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
      .add(TweenMax.to($("#ball5"), 1, { css: { bezier: flightpath1.entry}, ease: Power1.easeInOut }), 1)
  // 创建场景
  var scene_car = new ScrollMagic.Scene({ triggerElement: "#trigger6", duration: 200, offset: 100 })
    .setTween(tween1)
    .addTo(controller_car);
});