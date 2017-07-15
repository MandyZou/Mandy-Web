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
        } else {
            return simulation.force("x", ForceXCombine)
                        .force("y", d3.forceY(300).strength(0.08))
                        .force("colide", d3.forceCollide(8));
        }
    });

    });