// February、Mars-May、June、7.12-7.18、7.19-7.25、7.26-8.1、8.2-8.8、8.9-8.15、8.16-8.22、8.23-8.29、8.30-9.5
// 9.6-9.12、9.13-9.19、9.20-9.26、9.27-10.3、10.4-10.12
// 16 pages

var winWidth = $(window).width();
var ratio = winWidth / 1920;
var played = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
$("body").css("font-size", bodyFontSize + "px");

//  此处修改
vara[0] = new Vara(
    "#vara-container",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    [],
);
vara[1] = new Vara(
    "#vara-container2",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    [],
);
vara[2] = new Vara(
    "#vara-container3",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[3] = new Vara(
    "#vara-container4",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[4] = new Vara(
    "#vara-container5",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[5] = new Vara(
    "#vara-container6",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[6] = new Vara(
    "#vara-container7",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[7] = new Vara(
    "#vara-container8",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[8] = new Vara(
    "#vara-container9",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[9] = new Vara(
    "#vara-container10",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[10] = new Vara(
    "#vara-container11",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[11] = new Vara(
    "#vara-container12",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[12] = new Vara(
    "#vara-container13",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[13] = new Vara(
    "#vara-container14",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[14] = new Vara(
    "#vara-container15",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);
vara[15] = new Vara(
    "#vara-container16",
    "https://static.igem.wiki/teams/4195/wiki/json/addition.json",
    []
);

vara[15].ready(function() {
    $(".front:not(.last)").click(function() {
        let ix = $(this)
            .parent(".paper")
            .index();
        $(".book").addClass("open");
        $(this)
            .parent(".paper")
            .addClass("open");
        if (!played[ix]) {
            vara[ix].playAll();
            vara[ix].animationEnd(function(i, o) {
                played[ix] = 1;
                if (i == "link") {
                    var group = o.container;
                    var rect = vara[15].createNode("rect", {
                        x: 0,
                        y: 0,
                        width: o.container.getBoundingClientRect().width,
                        height: o.container.getBoundingClientRect().height,
                        fill: "transparent"
                    });
                    group.appendChild(rect);
                    $(rect).css("cursor", "pointer");
                    $(rect).click(function() {
                        console.log(true);
                        document.querySelector("#link").click();
                    });
                }
            });
        }
    });
    $(".back").click(function() {
        // 点击back，如果.back的父元素.paper的index为0，则该页面设置为关闭
        if ($(this).parent(".paper").index() == 0) {
            $(".book").removeClass("open");
            $(".ten-7").removeClass("open"); // 这里关闭最后一面
        }
        $(this).parent(".paper").removeClass("open");
    });
});