
const btnToggle = document.getElementById('btnToggle');
const homeBtn = document.getElementById('home');
const yellowBtn = document.getElementById('yellow');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');
const bodyTag = document.getElementById('bodyTag');
const divText = document.getElementById('text');

let toggleNavStatus = false;

let getNavToggle = document.querySelector(".nav-toggle");

function navToggle() {
    if (toggleNavStatus === false) {
        getNavToggle.style.display = "block";
        getNavToggle.style.width = "275px";
        divText.style.visibility = "hidden"
        toggleNavStatus = true;

    } else if (toggleNavStatus === true) {
        getNavToggle.style.display = "none";
        divText.style.visibility = "visible"
        toggleNavStatus = false;
    }
}

btnToggle.addEventListener('click', navToggle)

function homeColor () {
    document.body.style.backgroundColor = "#C70039";
    divText.innerHTML = 'This is color is: red'
    navToggle()
}

homeBtn.addEventListener('click', homeColor);

function yellowColor () {
    document.body.style.backgroundColor= "#FFC300";
    divText.innerHTML = 'This is color is: yellow'
    navToggle()
}

function greenColor () {
    document.body.style.backgroundColor= "#2cba38";
    divText.innerHTML = 'This is color is: green'
    navToggle()
}

function blueColor () {
    document.body.style.backgroundColor= "#3d7ff1";
    divText.innerHTML = 'This is color is: blue'
    navToggle()
}

homeBtn.addEventListener('click', homeColor);
yellowBtn.addEventListener('click', yellowColor);
greenBtn.addEventListener('click', greenColor);
blueBtn.addEventListener('click', blueColor);
