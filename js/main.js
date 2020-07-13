// menu
const menu = document.querySelector("svg");
var btn = document.getElementById('show');
var nav = document.getElementById('nav');

menu.addEventListener("click", morph);
nav.addEventListener("click", morph);
function morph() {
  menu.classList.toggle("open");
  nav.classList.toggle("active");
}
// end menu
