$(document).ready(function(){
    var gettMap = $("#trump");

    var tMapPosition = gettMap.position(); //Get top and let position

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();
        if (scrollBarPosition >= tMapPosition.top + 20){
            return simulation.force("x", ForceXCategory)
                            .force("y", ForceYCategory)
                            .alphaTarget(0.3)
                            .restart();
        }
    });

    });