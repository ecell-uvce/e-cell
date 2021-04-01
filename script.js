/*-------------------particle js background------------------*/

particlesJS.load("particles-js", "particles.json", function () {});

/*-------------------navigation menu-----------------*/
let bars = document.querySelector(".fa-bars");
let cross = document.querySelector(".fa-times");
let nav = document.querySelector(".nav-menu");

let About = document.getElementsByClassName("about-us");
let Gallery = document.getElementsByClassName("gallery");
let Team = document.getElementsByClassName("team");

let about = document.getElementById("about");
let events = document.getElementById("events");
let gallery = document.getElementById("gallery");
let team = document.getElementById("team");

/*-----menu appering and disappearing---------*/
bars.addEventListener("click", () => {
  bars.style.display = "none";
  nav.style.display = "block";
});

cross.addEventListener("click", () => {
  nav.style.display = "none";
  bars.style.display = "block";
});

/*-----modal image-------*/
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

var myfunc = function () {
  nav.style.display = "none";
  bars.style.display = "block";
};

var clickout = function () {
  //click anywhere on the body closes the mmenu
  nav.style.display = "none";
  bars.style.display = "block";
};
