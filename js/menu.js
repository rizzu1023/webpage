$(document).ready(function(){
    $(".navbarmyths__menu").click(function(){
        $(".navigation").show(400);
        $(".navbarmyths").hide(400);
    });

    $(".navigation-hide").click(function(){
        $(".navigation").hide(400);
        $(".navbarmyths").show(400);
        
    })
});