$(function () {

    //判斷是否有錯誤
    $("#button").click(function () {
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
        } else {
            $(".tiger-option").removeClass("error");
        }


        if ($('.error').length > 0) {
            return;
        } else {
            console.info("success~~~!!!");
        }
    });


    /*$('#button').click(function (e) {
      var select = $('input:radio[name="lottery"]:checked').val();
  
      if(select==null){
          //alert("please selct one!!");
          select.parent().addClass('error');
          //return false;
      }
      else{
          e.preventDefault();
      }
  
    });*/

    /*$name.blur(function () {
          if ($(this).val() == '') {
              $(this).parent().addClass('error');
          } else {
              if ($(this).parent().hasClass('error')) {
                  $(this).parent().removeClass('error');
              }
          }
      });*/
    /*$email.blur(function () {
        var email = $(this).val(),
            re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        if (re.test(email)) {
            if ($(this).parent().hasClass('error')) {
                $(this).parent().removeClass('error');
            }
        } else {
            $(this).parent().addClass('error');
            $(this).parent().find('span').text('Not a valid email address');
        }
    });
 
    $message.blur(function () {
        if ($(this).val() == '') {
            $(this).parent().addClass('error');
        } else {
            if ($(this).parent().hasClass('error')) {
                $(this).parent().removeClass('error');
            }
        }
    });*/

});

