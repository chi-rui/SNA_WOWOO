
/*  Give an URL to django and call 
	views.post_detail to produce a
	dymanic modal.
	Reference: http://stackoverflow.com/questions/26517605/pass-dynamic-content-to-bootstrap-modal-3-2
	 				   				*/
jQuery(function($){
    $('a.showModal').click(function(ev){
        ev.preventDefault();
        var postPk = $(this).data('id');
        $.get('/post/' + postPk, function(html){
            var post_detail = $(html).find("#post");
            $('#contentModal .modal-body').html(post_detail);
            $('div.modal-body').attr('data-postURL', '/post/' + postPk);
            $('#contentModal').modal('show', {backdrop: 'static'});
        });
    });
});



jQuery(function($){
    $('form.myComment').submit(function(ev){
        ev.preventDefault();
        alert('test');
        $.ajax({
            type: 'POST',
            url: '/comment/',
            data: $(this).serialize(),

        });
    });
});



/*	Press Enter in textarea
	
	Reference:http://stackoverflow.com/questions/2099661/enter-key-in-textarea
*/

// function formatTextArea(textArea) {
//         textArea.value = textArea.value.replace(/(^|\r\n|\n)([^*]|$)/g, "$1*$2");
//     }

// window.onload = function() {
//     var textArea = document.getElementsByClassName("comment-textarea");
//     textArea.onkeyup = function(evt) {
//         evt = evt || window.event;

//         if (evt.keyCode == 13) {
//             formatTextArea(this);
//         }
//     };
// };