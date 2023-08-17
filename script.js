const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.6,
});

tl.to("#page1", {
    y:"30vh",
    delay:1,
    duration:1

})

tl.to("#page1", {
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8


})

// script.js
const scrollToTopButton = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
