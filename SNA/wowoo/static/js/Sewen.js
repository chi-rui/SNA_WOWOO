jQuery(function($){
    $('a.showModal').click(function(ev){
        ev.preventDefault();
        var postPk = $(this).data('id');
        $.get('/post/' + postPk, function(html){
            var post_detail = $(html).find("#post");
            $('#contentModal .modal-body').html(post_detail);
            $('#contentModal').modal('show', {backdrop: 'static'});
        });
    });
});