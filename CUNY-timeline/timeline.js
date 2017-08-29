$(function(){
    $(".circle1").mouseover(function() {
        $(".law-title-1").show();
        $(".law-details-1").show();
    });

    $(".circle1").mouseout(function() {
        $(".law-title-1").hide();
        $(".law-details-1").hide();
    });

    $(".circle2").mouseover(function(){
        $(".law-title-2").show();
        $(".law-details-2").show();
    });

    $(".circle2").mouseout(function() {
        $(".law-title-2").hide();
        $(".law-details-2").hide();
    });

    $(".circle3").mouseover(function(){
        $(".law-title-3").show();
        $(".law-details-3").show();
    });

    $(".circle3").mouseout(function() {
        $(".law-title-3").hide();
        $(".law-details-3").hide();
    });
});