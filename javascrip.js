//  nut chon modal 
var modal = document.querySelector(".modal");
//  nut mo modal
var open__btn = document.querySelector(".Open__modal__btn")
open__btn.onclick = function () {
    open();
}
//  ham mo modal 
function open() {
    modal.classList.toggle("hidden");
    console.log(modal);
}
//  ham dong modal
function close() {
    modal.classList.add("hidden");
    console.log(modal);
}
//  icon dong va thuc hien dong modal
var close__btn = document.querySelector(".modal__title__icon");
close__btn.onclick = function () {
    console.log(close__btn);
    close();
}
//  dong modal khi nhan vao background
//  day co xuat hien su kien noi bot 
modal.onclick = function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
        close();
    }

}
//  dong modal khi bam vao nut close 
var close__btn2 = document.querySelector(".modal__close__btn");

close__btn2.onclick = function () {
    close();
}
