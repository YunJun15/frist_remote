$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.navbar-container').css("font-size","14px");
        $('.left').css("visibility", "visible");
        $('.left').animate({ "width": "300px" });
    });

    $('.nav-button').blur(function () {
        $('.navbar-container').css("font-size","0px");
        $('.left').animate({ "width": "0px" });
    });

});

