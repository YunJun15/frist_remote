$(function () {

    //判斷是否有錯誤
    $("#submit-button").click(function () {
        console.log("call!!!");
        var $call = $('#call');
        var $qq = $('#qq');

        if ($call.val() === '') {
            $call.parent().addClass('error');
        } else {
            $call.parent().removeClass('error');
        }
        if ($qq.val() === '') {
            $qq.parent().addClass('error');
        } else {
            $qq.parent().removeClass('error');
            
        }


        console.log("qq!!!");
        var lotteryOption = $('input:radio[name="lottery"]:checked').val();
        var tigerOption = $('input:radio[name="tiger"]:checked').val();

        if (lotteryOption === undefined) {
            $(".lottery-option").addClass("error");
            

        } else {
            $(".lottery-option").removeClass("error");
        }
        if (tigerOption === undefined) {
            $(".tiger-option").addClass("error");
            return false;
        } else {
            $(".tiger-option").removeClass("error");
        }


        if ($('.error').length > 0) {
            return;
        } else {
            console.info("success~~~!!!");
        }
    });


   

});

