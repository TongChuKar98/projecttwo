// Go to home
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/// Add To card
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


//

function myFunction() {
    alert("WElCOME");
}
//Slider
var SlideIndex = 0;
var MySlide = document.getElementsByClassName("card-slide-show");
ChangeSlide();
function ChangeSlide() {
    for (var i = 0; i < MySlide.length; i++) {
        MySlide[i].style.display = "none";
    }
    SlideIndex++;
    if (SlideIndex > MySlide.length) {
        SlideIndex = 1;
    }
    MySlide[SlideIndex - 1].style.display = "block";
    setTimeout(ChangeSlide, 3000);
}

//arrivals new
var arrival = document.getElementsByClassName("arrivals-menu");
var arrival1 = document.getElementById("m1");
var arrival2 = document.getElementById("m2")
var arrival3 = document.getElementById("m3")
var arrival4 = document.getElementById("m4")

var arrival5 = document.getElementById("a1");
var arrival6 = document.getElementById("a2")
var arrival7 = document.getElementById("a3")
var arrival8 = document.getElementById("a4")
arrival[0].onclick = function () {
    for (var i = 0; i < arrival.length; i++) {
        arrival[i].classList.remove("active-arrivals");
    }
    arrival[0].classList.add("active-arrivals");
    arrival1.style.display = "flex";
    arrival2.style.display = "none";
    arrival3.style.display = "none";
    arrival4.style.display = "none";
    arrival5.style.display = "block";
    arrival6.style.display = "none";
    arrival7.style.display = "none";
    arrival8.style.display = "none";
}
arrival[1].onclick = function () {
    for (var i = 0; i < arrival.length; i++) {
        arrival[i].classList.remove("active-arrivals");
    }
    arrival[1].classList.add("active-arrivals");
    arrival1.style.display = "none";
    arrival2.style.display = "flex";
    arrival3.style.display = "none";
    arrival4.style.display = "none";
    arrival5.style.display = "none";
    arrival6.style.display = "block";
    arrival7.style.display = "none";
    arrival8.style.display = "none";
}
arrival[2].onclick = function () {
    for (var i = 0; i < arrival.length; i++) {
        arrival[i].classList.remove("active-arrivals");
    }
    arrival[2].classList.add("active-arrivals");
    arrival1.style.display = "none";
    arrival2.style.display = "none";
    arrival3.style.display = "flex";
    arrival4.style.display = "none";
    arrival5.style.display = "none";
    arrival6.style.display = "none";
    arrival7.style.display = "block";
    arrival8.style.display = "none";
}
arrival[3].onclick = function () {
    for (var i = 0; i < arrival.length; i++) {
        arrival[i].classList.remove("active-arrivals");
    }
    arrival[3].classList.add("active-arrivals");
    arrival1.style.display = "none";
    arrival2.style.display = "none";
    arrival3.style.display = "none";
    arrival4.style.display = "flex";
    arrival5.style.display = "none";
    arrival6.style.display = "none";
    arrival7.style.display = "none";
    arrival8.style.display = "block";
}