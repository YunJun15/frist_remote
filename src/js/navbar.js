$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.navbar-container').css("visibility","visible");
        $('.left').css("visibility", "visible");
        $('.left').animate({ "width": "300px" });
    });

    $('.nav-button').blur(function () {
        $('.navbar-container').css("visibility","hidden");
       // $('.active').preventDefault();
        $('.left').animate({ "width": "0px" });
        //$('.left').animate({ "fontSize": "0px" });
        

    });
   


});

