// SELECTING ELEMENT
var contact = document.getElementById("contact");
var btn = document.getElementById("menu-button");
var btnSlide = document.getElementById("slide-button");
var minimize = document.getElementById("minimize");

btn.addEventListener("click", dropmenu)
function dropmenu() {
   if (contact.className == "hide") {
   	contact.className = "";
   } else {
   	contact.className = "hide";
   }
   
}

btnSlide.addEventListener("click", showMore);
function showMore() {
    if(minimize.style.display  != "none") {
        minimize.style.display  = "none";
         btnSlide.style.background = "rgb(0, 0, 23)";
    } else {
        minimize.style.display = "block";
        btnSlide.style.background = "#012549";
    }
}

window.onload  = (function() {
    if(document.body.clientWidth <= 480 || window.outerWidth <= 480) {
         if(minimize.style.display  != "none") {
        minimize.style.display  = "none";
         btnSlide.style.background = "rgb(0, 0, 23)";
    } else {
        minimize.style.display = "block";
        btnSlide.style.background = "#012549";
    }
    }
}())



