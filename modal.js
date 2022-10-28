var modal = document.getElementById("myModal");
var modal_1 = document.getElementById("myModal_1");
var modal_2 = document.getElementById("myModal_2");
var modal_3 = document.getElementById("myModal_3");
var modal_4 = document.getElementById("myModal_4");


// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");
var btn_1 = document.getElementById("myBtn_1");
var btn_2 = document.getElementById("myBtn_2");
var btn_3 = document.getElementById("myBtn_3");
var btn_4 = document.getElementById("myBtn_4");


// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];
var span_1 = document.getElementsByClassName("close")[1];
var span_2 = document.getElementsByClassName("close")[2];
var span_3 = document.getElementsByClassName("close")[3];
var span_4 = document.getElementsByClassName("close")[4];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}
btn_1.onclick = function() {
    modal_1.style.display = "block";
}
btn_2.onclick = function() {
    modal_2.style.display = "block";
}
btn_3.onclick = function() {
    modal_3.style.display = "block";
}
btn_4.onclick = function() {
    modal_4.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";

}
span_1.onclick = function() {
    modal_1.style.display = "none";

}
span_2.onclick = function() {
    modal_2.style.display = "none";

}
span_3.onclick = function() {
    modal_3.style.display = "none";

}
span_4.onclick = function() {
    modal_4.style.display = "none";

}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal || event.target == modal_1 || event.target == modal_2 ||event.target == modal_3 ||event.target == modal_4) {
        modal.style.display = "none";
        modal_1.style.display = "none";
        modal_2.style.display = "none";
        modal_3.style.display = "none";
        modal_4.style.display = "none";
    }
}