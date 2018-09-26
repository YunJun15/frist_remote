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
    var text=document.getElementsByClassName("form-text-container-label")[0];
    text.classList.add("texarea-title-move-up");
}




function callonblur(){
    document.getElementById("call").placeholder = "称呼";
    document.getElementById("phone").placeholder = "联系电话";
    document.getElementById("qq").placeholder = "联系QQ(Email必填";
    document.getElementsByClassName("form-text-container-label")[0].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[1].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[2].classList.remove("move-up");
    
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



