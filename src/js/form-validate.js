$(function () {
    var $call = $('#call'),
        $qq = $('#qq');


        //判斷稱呼和聯繫QQ 是否填寫
    $('#button').click(function (e) {
  
        if ($call.val() == '') {
            $call.parent().addClass('error');
        }
        if ($qq.val() == '') {
            $qq.parent().addClass('error');
            
        }
        if ($('.error').length > 0) {
          e.preventDefault();
          
        }

    });
    //判斷radio 是否被選取
    $("#button").click(function(){ 
      var val=$('input:radio[name="lottery"]:checked').val();      if(val==null){
          $(".form-radio-required").css("visibility","visible");               
          return false;
      }            
        else{
          //alert("有選到");
          //alert(val); 
          return true;
          
        }            
        /*var list= $('input:radio[name="list"]:checked').val();     if(list==null){
          alert("请选中一个!");
          return false;
        }else{ 
          alert(list);}*/
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

  