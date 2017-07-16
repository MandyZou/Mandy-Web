$(document).ready(function(){
    var gettMap = $("#trump");

    var tMapPosition = gettMap.position(); //Get top and let position

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();
        if (scrollBarPosition >= tMapPosition.top + 20){
            return simulation.force("x", ForceXCategory)
                            .force("y", ForceYCategory)
                            .alphaTarget(0.18)
                            .restart();
        } else {
            return simulation.force("x", ForceXCombine)
                            .force("y", d3.forceY(200).strength(0.08))
                            .force("colide", d3.forceCollide(8))
                            .alphaTarget(0.05)
                            .restart();
        }
    });

    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();
        if (scrollBarPosition >= tMapPosition.top + 20){
            $(".text-all").attr("visibility","hidden");
            $(".text-category").attr("visibility","visible").addClass('animated flipInX');
        } else {
            $(".text-all").attr("visibility","visible").addClass('animated flipInX');
            $(".text-category").attr("visibility","hidden");
        }
    });

    //For chart
    $(window).scroll(function(){
        var scrollBarPosition = $(window).scrollTop();
        if (scrollBarPosition >= tMapPosition.top + 500){
            return simulation.force("x", ForceXChart)
                            .force("y", ForceYChart)
                            .alphaTarget(0.18)
                            .restart();
            // console.log("hey!")
        } else {
            // return simulation.force("x", ForceXCombine)
            //                 .force("y", d3.forceY(200).strength(0.08))
            //                 .force("colide", d3.forceCollide(8))
            //                 .alphaTarget(0.05)
            //                 .restart();
        }
    });

    // $(window).scroll(function(){
    //     var scrollBarPosition = $(window).scrollTop();
    //     if (scrollBarPosition >= tMapPosition.top + 800){
    //         $(".text-all").attr("visibility","hidden");
    //         $(".text-category").attr("visibility","visible").addClass('animated flipInX');
    //     } else {
    //         $(".text-all").attr("visibility","visible").addClass('animated flipInX');
    //         $(".text-category").attr("visibility","hidden");
    //     }
    // });

    });