//up键开始
var backTop = document.querySelector(".toTop");

backTop.addEventListener("click", function () {
    window.scrollTo({top: -100, left: 0, behavior: 'smooth'})
})
//up键结束

//侧边栏点击跳转开始
// 获取所有侧边栏链接
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// 为每个侧边栏链接添加点击事件监听器
sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认的链接行为

        // 从链接的 href 属性中获取目标内容区块的 ID
        const targetSectionId = link.getAttribute('href').substring(1);

        // 滚动到目标内容区块的上方 120px 处
        const targetSection = document.getElementById(targetSectionId);
        const targetOffset = targetSection.offsetTop - 30;
        window.scrollTo({
            top: targetOffset,
            left: 0,
            behavior: 'smooth'
        });

        // 给点击的链接添加 'current' 类
        sidebarLinks.forEach((sidebarLink) => {
            sidebarLink.classList.remove('current');
        });
        link.classList.add('current');
    });
});

window.onload = function () {
    const sidebarLinktwos = document.querySelectorAll('.sidebar-link-two');
    console.log(sidebarLinktwos);

    for (let i = 0; i < sidebarLinktwos.length; i++) {
        const li = sidebarLinktwos[i];

        li.onclick = function (event) {
            event.preventDefault();
            const twoId = li.getAttribute('data-section');
            const twoSection = document.getElementById(twoId);
            const twoOffset = twoSection.getBoundingClientRect().top - 110;

            if (twoOffset >= 1 && twoOffset <= window.innerHeight) {
                // 在视口内部，不需要滚动
            } else {
                // 在视口之外，按照原来的方式滚动到目标位置
                window.scrollTo({top: twoOffset + window.pageYOffset, left: 0, behavior: 'smooth'});
            }
        };
    }
};
//侧边栏点击跳转结束

//侧边栏随航开始
//获取所有侧边栏链接元素
var links = document.querySelectorAll('.sidebar-link');

// 添加滚动事件监听器
window.addEventListener('scroll', function() {
    // 获取当前滚动位置
    var scrollPosition = window.scrollY;

    // 遍历所有目标区域
    for (var i = 1; i <= 10; i++) {
        // 获取目标区域的位置和高度
        var section = document.getElementById('section' + i);
        if (section == null) continue;
        var sectionTop = section.offsetTop - 90; // 上移
        var sectionHeight = section.offsetHeight;

        // 如果当前滚动位置处于目标区域内，则将相应的侧边栏链接样式修改为当前样式
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            links.forEach(function(link) {
                link.classList.remove('current');
            });
            links[i - 1].classList.add('current');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取当前滚动位置
    var scrollPosition = window.scrollY;

    // 遍历所有目标区域
    for (let i = 1; i <= 10; i++) {
        // 获取目标区域的位置和高度
        var section = document.getElementById('section' + i);
        if (section == null) continue;
        var sectionTop = section.offsetTop - 90; // 上移
        var sectionHeight = section.offsetHeight;

        // 如果当前滚动位置处于目标区域内，则将相应的侧边栏链接样式修改为当前样式
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            links.forEach(function(link) {
                link.classList.remove('current');
            });
            links[i - 1].classList.add('current');
        }
    }
});
//侧边栏随航结束

//footer出现,侧边栏消失
// 获取元素
const sidebar = document.querySelector('.myScrollspy');
const myFooter = document.querySelector('#myFooter');

// 监听 myFooter 元素的出现
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sidebar.classList.add('hidden'); // 添加 hidden 类名
        } else {
            sidebar.classList.remove('hidden'); // 移除 hidden 类名
        }
    });
});

observer.observe(myFooter); // 开始监听 myFooter 元素的出现


//侧边栏滚动条
// 获取元素
// init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {}});
	  // build scenes
    new ScrollMagic.Scene({triggerElement: "#section1"})
            .setClassToggle("#spointer", "pointactive1") // add class toggle
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#section2"})
            .setClassToggle("#spointer", "pointactive2") // add class toggle
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#section3"})
            .setClassToggle("#spointer", "pointactive3") // add class toggle
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#section4"})
            .setClassToggle("#spointer", "pointactive4") // add class toggle
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#section5"})
            .setClassToggle("#spointer", "pointactive5") // add class toggle
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#section6"})
            .setClassToggle("#spointer", "pointactive6") // add class toggle
            .addTo(controller);
