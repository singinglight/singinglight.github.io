//up键开始
var backTop = document.querySelector(".toTop");

backTop.addEventListener("click", function () {
    window.scrollTo({top: -100, left: 0, behavior: 'smooth'})
})
//up键结束