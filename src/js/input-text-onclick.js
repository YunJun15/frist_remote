function callstart(){
var text=document.getElementsByClassName("form-text-container-label")[0];
text.classList.add("move-up");
}
function phonestart(){
var text=document.getElementsByClassName("form-text-container-label")[1];
text.classList.add("move-up");
}
function qqstart(){
    var text=document.getElementsByClassName("form-text-container-label")[2];
    text.classList.add("move-up");
}
function agenstart(){
    var text=document.getElementsByClassName("form-textarea-container-label")[0];
    text.classList.add("texarea-title-move-up");
}
function messagestart(){
    var text=document.getElementsByClassName("form-textarea-container-label")[1];
    text.classList.add("texarea-title-move-up");
    var icon=document.getElementById("message-icon");
    icon.style.color = "#f0be9d";
    var character=document.getElementsByClassName("message-character")[0];
    character.textContent="0/100"; //文字顯示內容 "0/100"

}

function callonblur(){
    document.getElementById("call").placeholder = "称呼";
    document.getElementById("phone").placeholder = "联系电话";
    document.getElementById("qq").placeholder = "联系QQ(Email必填";
    document.getElementsByClassName("form-text-container-label")[0].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[1].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[2].classList.remove("move-up");
    document.getElementsByClassName("form-textarea-container-label")[0].classList.remove("texarea-title-move-up");
    document.getElementsByClassName("form-textarea-container-label")[1].classList.remove("texarea-title-move-up");
    document.getElementById("message-icon").style.color = "#0f0f0f";
    document.getElementsByClassName("message-character")[0].textContent="";
    
}

//驗證表單
function checkRequired(){
    var call, qq, lottery, tiger;
    call = document.getElementById("call").value;
    qq = document.getElementById("qq").value;
    lottery = document.getElementsByClassName("item-required")[2].value;
    tiger = document.getElementsByClassName("item-required")[3].value;

    if (call,qq == "") { //為空值
        classList.add("form-text-required-style"); //加入class
        return false;
    } else {
        classList.remove("text-required");
        return true;
    }
    
}
//function phonestart(){
//var text = document.getElementById("phone-move-up");
//text.classList.add("move-up");
//}
//function qqstart(){
//    var text = document.getElementById("qq-move-up");
//    text.classList.add("move-up");
//}



    //document.getElementById("call").onclick = 
    //function(){
    //    var text = document.getElementsByClassName("form-text-container-lael");
    //    alert("text");
    //}



