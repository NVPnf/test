let upButton = document.getElementById('scroll-up-button');
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); // For Chrome, Firefox, IE and Opera
}
// for safari not documentElement, only body