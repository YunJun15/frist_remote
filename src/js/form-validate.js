$(function(){
    var $call = $('#call');

    $call.blur(function(){
        if ($(this).val() == ''){
            $(this).parent().addClass('error');
        } else{
            if ($(this).parent().hasClass('error')){ //包含
                $(this).parent().removeClass('error');
            }
        }
    });
});


$('button[type="submit"]').click(function (e) {
    if($call.val() == ''){
        $call.parent().addClass('error');
    }
    if ($('error').lengh > 0){
        e.preventDefault();
    }
});