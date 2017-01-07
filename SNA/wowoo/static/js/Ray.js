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
    $(".headshot").css("box-shadow","0px 0px 15px 5px #ffffff");
    $(".switch1").css("box-shadow","0px 0px 15px 5px #ffffff");
},function(){
    $(".headshot").css("box-shadow","none");
    $(".switch1").css("box-shadow","none");
});
$(".box").hover(function(){
    // console.log("hover!");
    $(".achievement").css("box-shadow","0px 0px 15px 5px #ffffff");
    $(".switch2").css("box-shadow","0px 0px 15px 5px #ffffff");
},function(){
    $(".achievement").css("box-shadow","none");
    $(".switch2").css("box-shadow","none");
});

//click on profile/achievement
$(".headshot").click(function(){
    $("#info_achievement").removeClass("hidden");
    $("#info_profile").hide("medium");
    $("#info_achievement").show("medium");
});
$(".box").click(function(){
    $("#info_profile").show("medium");
    $("#info_achievement").hide("medium");
});

//change hot/new/own sort
var token = $('input[name="csrfmiddlewaretoken"]').prop('value');
$("#butt1").click(function(){
    //hot
    $.ajax({
        type:'POST',
        url:'/sort/',
        data: { 
            'csrfmiddlewaretoken': token,
            'field': "new", 
        },
        success:function(data){
            var refreshParts = $(data).find('#content_block');
            $('#content_block').html(refreshParts);
        }
    });
    $("#butt1").hide("medium");
    $("#butt2").show("medium");
});
$("#butt2").click(function(){
    //new
    $.ajax({
        type:'POST',
        url:'/sort/',
        data: { 
            'csrfmiddlewaretoken': token,
            'field': "own", 
        },
        success:function(data){
            var refreshParts = $(data).find('#content_block');
            $('#content_block').html(refreshParts);
        }
    });
    $("#butt2").hide("medium");
    // $("#butt2").addClass("hidden");
    // $("#butt3").removeClass("hidden");
    $("#butt3").show("medium");
});
$("#butt3").click(function(){
    //own
    $.ajax({
        type:'POST',
        url:'/sort/',
        data: { 
            'csrfmiddlewaretoken': token,
            'field': "hot", 
        },
        success:function(data){
            var refreshParts = $(data).find('#content_block');
            $('#content_block').html(refreshParts);
        }
    });
    $("#butt3").hide("medium");
    // $("#butt3").addClass("hidden");
    // $("#butt1").removeClass("hidden");
    $("#butt1").show("medium");
});
