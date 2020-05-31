var form-closer = document.querySelector(".cross-icon-wrapper");
var main-form = document.querySelector(".form");
var clicker-form = document.querySelector(".form-page-clicker");
var quoteitem = document.querySelector(".get-quote-item");
var quotecolor = document.querySelector(".get-quote-color");
var links = document.getElementsByTagName("a");
var main-menu = document.querySelector(".hamburger-button");
var lineone = document.getElementById("line1");
var linetwo = document.getElementById("line2");
var menubar = document.querySelector(".menu-bar");
var flag = 0;
var over-lay = document.querySelector(".overlay");
var hide = document.querySelector(".overlay");

var x = window.matchMedia("(max-width: 991px)");
myFunction(x); 
x.addListener(myFunction);
function myFunction(x) {
  if (x.matches) {
    .style.height = "0";
    menubar.style.opacity = "0";
    lineone.style.transform = "translate(-50%, -4px)";
    linetwo.style.transform = "translate(-50%, 8px)";
    menubar.style.transition = "none";

    main-menu.onclick = function () {
      if (flag == "0") {
        console.log(123);
        lineone.style.transform = "translate(-50%, 0px) rotate(45deg)";
        linetwo.style.transform = "translate(-50%, 0px) rotate(-45deg)";
        menubar.style.transition = "all 0.2s linear";
        menubar.style.height = "360px";
        menubar.style.opacity = "1";

        flag = 1;
      } else if (flag == 1) {
        lineone.style.transform = "translate(-50%, -4px)";
        linetwo.style.transform = "translate(-50%, 8px)";
        menubar.style.opacity = "0";
        menubar.style.height = "0";

        flag = 0;
      }
    };
  } else {
    menubar.style.height = "auto";
    menubar.style.opacity = "1";
  }
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (k) {
    if (this.getAttribute("href") === "#") k.preventDefault();
  });
}

form-closer.onclick = function () {
  main-form.style.transform = "translateX(100%)";
  over-lay.style.display = "none";
  over-lay.style.opacity = "0";
};
clicker-form.onclick = function () {
  main-form.style.transform = "translateX(0)";
  over-lay.style.display = "block";
  over-lay.style.opacity = "1";
};
quoteitem.onclick = function () {
  main-form.style.transform = "translateX(0)";
  over-lay.style.display = "block";
  over-lay.style.opacity = "1";
};
quotecolor.onclick = function () {
  main-form.style.transform = "translateX(0)";
  over-lay.style.display = "block";
  over-lay.style.opacity = "1";
};
hide.onclick = function () {
    over-lay.style.display = "none";
    over-lay.style.opacity = "0";
  main-form.style.transform = "translateX(100%)";
};
