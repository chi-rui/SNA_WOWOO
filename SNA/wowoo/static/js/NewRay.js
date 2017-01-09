var sidebar = $("#sidebar");
var log = 0;
$(document).ready(function() {
    $('.post-likes').click(function() {
        var id;
        id = $(this).attr('data-post-id');
        $.get('/like-blog/', {
            post_id: id
        }, function(data) {
            $('#test' + id).html(data);
        });
    });
});
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

//rebuild openmodel click eventlistener
function model_fix(){
    $('a.showModal').click(function(ev){
        ev.preventDefault();
        var postPk = $(this).data('id');
        $.get('/post/' + postPk, function(html){
            var post_detail = $(html).find("#post");
            $('#contentModal .modal-body').html(post_detail);
            $('div.modal-body').attr('data-postURL', '/post/' + postPk);
            $('#contentModal').modal('show', {backdrop: 'static'});
            button_fix();
        });
    });
    $('.post-likes').click(function() {
        var id;
        id = $(this).attr('data-post-id');
        $.get('/like-blog/', {
            post_id: id
        }, function(data) {
            $('#test' + id).html(data);
        });
    });

}

//rebuild button click eventlistener
function button_fix(){
    $('#postPK').click(function(ev){
        ev.preventDefault();
        var textInput = $('#comment-textarea').val();
        var emoInput = $('input[name=emotion]:checked').val();
        $.ajax({
            type: 'POST',
            url: '/post/' + $('#postPK').attr('value') + '/comment/',
            data: {
                'csrfmiddlewaretoken'  : token,
                'textData'             : textInput,
                'emoData'             : emoInput,
            },
            success: function(data){
                var reloadResults = $(data).find('#resultBorder');
                var reloadComments = $(data).find('#__comments__');
                $('#resultBorder').html(reloadResults);
                $('#__comments__').html(reloadComments);
                $('#comment-textarea').val("");
                $('.post-likes').click(function() {
                var id;
                id = $(this).attr('data-post-id');
                $.get('/like-blog/', {
                    post_id: id
                }, function(data) {
                    $('#test' + id).html(data);
                });
            });
            }
        });
    });

}

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
            model_fix()
        }
    });
    $("#butt1").hide("medium");
    $("#butt2").show("medium");
});
$("#butt2").click(function(){
    //new

    var n = $("#butt3").length;
    if(n == 1){
        $.ajax({
            type:'POST',
            url:'/sort/',
            data: { 
                'csrfmiddlewaretoken': token,
                'field': "own", 
                // 'userLogined': userLogined,
            },
            success:function(data){
                var refreshParts = $(data).find('#content_block');
                $('#content_block').html(refreshParts);
                model_fix()
            }
        });
        $("#butt2").hide("medium");
        // $("#butt2").addClass("hidden");
        // $("#butt3").removeClass("hidden");
        $("#butt3").show("medium");
    }else{
        $.ajax({
            type:'POST',
            url:'/sort/',
            data: { 
                'csrfmiddlewaretoken': token,
                'field': "hot", 
                // 'userLogined': userLogined,
            },
            success:function(data){
                var refreshParts = $(data).find('#content_block');
                $('#content_block').html(refreshParts);
                model_fix()
            }
        });
        $("#butt2").hide("medium");
        // $("#butt2").addClass("hidden");
        // $("#butt3").removeClass("hidden");
        $("#butt1").show("medium");
    }

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
            model_fix()
        }
    });
    $("#butt3").hide("medium");
    // $("#butt3").addClass("hidden");
    // $("#butt1").removeClass("hidden");
    $("#butt1").show("medium");
});
