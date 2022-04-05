"use strict";

document.querySelectorAll('.parallax').forEach(function (elem) {
  var modifier = elem.getAttribute('data-modifier');
  basicScroll.create({
    elem: elem,
    from: 0,
    to: 519,
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: "".concat(10 * modifier, "px")
      }
    }
  }).start();
});
var routesButtons = Array.from(document.getElementsByClassName('routes__button'));
routesButtons[0].innerText = '1 день';
routesButtons[1].innerText = '2 дня';
routesButtons[2].innerText = '3 дня';
routesButtons[3].innerText = '5 дней';
routesButtons[4].innerText = '6 дней';
routesButtons[5].innerText = '7 дней';
var mobileMenuButton = document.getElementById("mobileMenuButton");
var mobileMenuCloseButton = document.getElementById("mobileMenuCloseButton");
var mobileMenu = document.getElementById("mobileMenu");
var mobileMenuLinks = Array.from(document.querySelectorAll("#mobileMenu a"));

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add("mobile-menu_active");
});
mobileMenuCloseButton.addEventListener('click', function () {
  mobileMenu.classList.remove("mobile-menu_active");
});
mobileMenuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    mobileMenu.classList.remove("mobile-menu_active");
  });
});

function get_ya_browser() {
  var ua = navigator.userAgent;

  if (ua.search(/YaBrowser/) > 0) {
    return document.getElementById('headerShape').style.display = "none";
  }
} // let browser = get_ya_browser();


get_ya_browser();