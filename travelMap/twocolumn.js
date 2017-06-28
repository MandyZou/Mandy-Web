$(document).ready(function(){
    var gettMap = $("#tMap");

    var tMapPosition = gettMap.position(); //Get top and let position

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();
        if (scrollBarPosition >= tMapPosition.top){
            gettMap.css({
                "position": "fixed",
                "top": 10,
            });
        }
        else {
            gettMap.css({
                "position": "fixed",
                "top": 0
            });
        };
    });

// Cities 01
    var getCities = $("#cities1");

    var citiesPosition = getCities.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= citiesPosition.top){
            getCities.addClass("afterScroll");
            $(".Jiangxi").addClass("selected02");
            // console.log("add!")
        } else if (scrollBarPosition  >= (citiesPosition.top + 3)) {
            getCities.css({"visibility": "hidden"});
        }
    });

// Cities 01 on map

    var getCities2 = $("#cities2");

    var citiesPosition2 = getCities2.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition2.top + 20)){
            getCities2.addClass("afterScroll");
            $(".Jiangxi").addClass("selected03");
            $(".Hubei").addClass("selected03");
            // console.log("add2!")
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities3 = $("#cities3");

    var citiesPosition3 = getCities3.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition3.top + 40)){
            getCities3.addClass("afterScroll");
            $(".Jiangxi").removeClass("selected03");
            $(".Hubei").removeClass("selected03");
            $(".Beijing").addClass("selected04");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities4 = $("#cities4");

    var citiesPosition4 = getCities4.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition4.top + 60)){
            getCities4.addClass("afterScroll");
            $(".Beijing").removeClass("selected04");
            $(".Jiangxi").addClass("selected05");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities5 = $("#cities5");

    var citiesPosition5 = getCities5.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition5.top + 80)){
            getCities5.addClass("afterScroll");
            $(".Jiangxi").removeClass("selected05");
            $(".Shanxi").addClass("selected06");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities6 = $("#cities6");

    var citiesPosition6 = getCities6.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition6.top + 100)){
            getCities6.addClass("afterScroll");
            $(".Jiangxi").addClass("selected07");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities7 = $("#cities7");

    var citiesPosition7 = getCities7.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition7.top + 120)){
            getCities7.addClass("afterScroll");
            $(".Jiangxi").removeClass("selected07");
            $(".Hongkong").addClass("selected08");
            $(".Macao").addClass("selected08");
            $(".Guangdong").addClass("selected08");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities8 = $("#cities8");

    var citiesPosition8 = getCities8.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition8.top + 140)){
            getCities8.addClass("afterScroll");
            $(".Hongkong").removeClass("selected08");
            $(".Macao").removeClass("selected08");
            $(".Guangdong").removeClass("selected08");
            $(".Liaoning").addClass("selected02");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities9 = $("#cities9");

    var citiesPosition9 = getCities9.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition9.top + 160)){
            getCities9.addClass("afterScroll");
            $(".Jiangxi").addClass("selected03");
            $(".Liaoning").removeClass("selected02");
        } else {
            // s.removeClass("afterScroll");
        }
    });

    var getCities10 = $("#cities10");

    var citiesPosition10 = getCities10.position();

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();

        if (scrollBarPosition >= (citiesPosition10.top + 180)){
            getCities10.addClass("afterScroll");
            $(".Sichuan").addClass("selected04");
            $(".Jiangxi").removeClass("selected03");
        } else {
            // s.removeClass("afterScroll");
        }
    });


    });