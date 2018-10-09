function callStart() {
    var text = document.getElementsByClassName("form-text-container-label")[0];
    text.classList.add("move-up");
}
function phoneStart() {
    var text = document.getElementsByClassName("form-text-container-label")[1];
    text.classList.add("move-up");
}
function qqStart() {
    var text = document.getElementsByClassName("form-text-container-label")[2];
    text.classList.add("move-up");
}
function agentStart() {
    var text = document.getElementsByClassName("form-textarea-container-label")[0];
    text.classList.add("textarea-title-move-up");
}
function messageStart() {
    var text = document.getElementsByClassName("form-textarea-container-label")[1];
    text.classList.add("textarea-title-move-up");
    var icon = document.getElementById("message-icon");
    icon.style.color = "#f0be9d";
    var character = document.getElementsByClassName("message-character")[0];
    character.textContent = "0/100"; //文字顯示內容 "0/100"

}

function callOnBlur() {
    document.getElementById("call").placeholder = "称呼";
    document.getElementById("phone").placeholder = "联系电话";
    document.getElementById("qq").placeholder = "联系QQ(Email必填)";
    document.getElementsByClassName("form-text-container-label")[0].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[1].classList.remove("move-up");
    document.getElementsByClassName("form-text-container-label")[2].classList.remove("move-up");
    document.getElementsByClassName("form-textarea-container-label")[0].classList.remove("textarea-title-move-up");
    document.getElementsByClassName("form-textarea-container-label")[1].classList.remove("textarea-title-move-up");
    document.getElementById("message-icon").style.color = "#0f0f0f";
    document.getElementsByClassName("message-character")[0].textContent = "";

}


