jQuery(document).ready(function($) {
    $('#toggle-mobile-nav').click(function() {
        $('#page').toggleClass('mobile-nav-opened');
    });

    $('#page').click(function(e) {
        let target = e.target;
        let isMobileNavButtonClicked = (
            $(target).hasClass('navbar-toggler') || 
            $(target).parent().hasClass('navbar-toggler')
        );
        if(isMobileNavButtonClicked) {
            return;
        }
        $('#page').removeClass('mobile-nav-opened');
    });
})