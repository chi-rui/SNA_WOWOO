var sidebar = $("#sidebar");
var log = 0;

//initial state
$(document).ready(function(){
    $("#butt2").hide("medium");
    $("#butt3").hide("medium");
});
//var prof_achi = 0;
//$("#info_achievement").hide("medium");
// $(window).scroll(function(){
     
//     //console.log("top : " + this.scrollTop );
//     var Top = $(window).scrollTop();
//     var L = $("col-md-1").css("width");
//     var T = $("header").height();
//     if(Top > (T-45)){
//         $("#left").addClass("fixed_sidebar");
//         $(".fixed_sidebar").css("left",L+"px");
//         //$(".switch").css("left",H+"px");
//         //console.log("left : " + (L+45));
// //        $("#box").addClass("fixed_box");
//     }else{
//         $("#left").removeClass("fixed_sidebar");
// //         $("#box").removeClass("fixed_box");
//     }
    
// });

//hover on profile/achievement
$(".headshot").hover(function(){
    // console.log("hover!");
    $(".headshot").css("box-shadow","0px 0px 15px 5px #D64541");
    $(".switch1").css("box-shadow","0px 0px 15px 5px #D64541");
},function(){
    $(".headshot").css("box-shadow","none");
    $(".switch1").css("box-shadow","none");
});

//click on profile/achievement
$(".headshot").click(function(){
    $("#info_achievement").removeClass("hidden");
    $("#info_profile").hide("medium");
    $("#info_achievement").show("medium");
});
$(".switch2").click(function(){
    $("#info_profile").show("medium");
    $("#info_achievement").hide("medium");
});

//change hot/new/own sort
$("#butt1").click(function(){
    $("#butt1").hide("medium");
    // $("#butt1").addClass("hidden");
    // $("#butt2").removeClass("hidden");
    $("#butt2").show("medium");
    console.log("YA");
});
$("#butt2").click(function(){
    $("#butt2").hide("medium");
    // $("#butt2").addClass("hidden");
    // $("#butt3").removeClass("hidden");
    $("#butt3").show("medium");
});
$("#butt3").click(function(){
    $("#butt3").hide("medium");
    // $("#butt3").addClass("hidden");
    // $("#butt1").removeClass("hidden");
    $("#butt1").show("medium");
});
