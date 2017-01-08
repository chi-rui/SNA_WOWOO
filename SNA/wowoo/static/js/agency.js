// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            // scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: -5
        }
    })

})(jQuery); // End of use strict

function modalCreate() {
    var M = document.getElementsByClassName('modal-link portfolio-link');
    var modalURL = M.href;
    var modalDiv = document.createElement('div');
    modalDiv.className = 'modal fade';
    modalDiv.id = 'index';
    modalDiv.role = 'dialog';
    document.getElementsByTagName('body')[0].appendChild(modalDiv);

    var modalDialogDiv = document.createElement('div');
    modalDialogDiv.className = 'modal-dialog';
    modalDiv.appendChild(modalDialogDiv);

    var modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';
    modalDialogDiv.appendChild(modalContentDiv);

    var modalIframe = document.createElement('iframe');
    modalIframe.src = 'http://www.w3schools.com/tags/tag_iframe.asp';
    modalContentDiv.appendChild(modalIframe);
}
