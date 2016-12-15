var sidebar = $("#sidebar");
var log = 0;
//var prof_achi = 0;
//$("#info_achievement").hide("medium");
$(window).scroll(function(){
     
    //console.log("top : " + this.scrollTop );
    var Top = $(window).scrollTop();
    var L = $("col-md-1").css("width");
    var T = $("header").height();
    if(Top > (T-45)){
        $("#left").addClass("fixed_sidebar");
        $(".fixed_sidebar").css("left",L+"px");
        //$(".switch").css("left",H+"px");
        //console.log("left : " + (L+45));
//        $("#box").addClass("fixed_box");
    }else{
        $("#left").removeClass("fixed_sidebar");
//         $("#box").removeClass("fixed_box");
    }
    
});

//$("#login").click(function(){
//});

$(".switch1").click(function(){
    $("#info_achievement").removeClass("hidden");
    $("#info_profile").hide("medium");
    $("#info_achievement").show("medium");
});
$(".switch2").click(function(){
    $("#info_profile").show("medium");
    $("#info_achievement").hide("medium");

});
