jQuery(document).ready(function(){
    jQuery(".dropdown").hover(function() {
        jQuery(this).children('.dropdown-menu').addClass("show_children");
    }, function() {
        jQuery(this).children('.dropdown-menu').removeClass("show_children");
    });

});