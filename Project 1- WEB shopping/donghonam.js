

/*-----------------Slide----------*/ 
var SlideIndex = 0;
var MySlide = document.getElementsByClassName("slide-men-wear");
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