let upButton = document.getElementById('scroll-up-button');
window.onscroll = function() {
    scrollFunction();
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

let nodeList = document.querySelectorAll('.flat_card');
// console.log(nodeList);
let itemsArray = [];
let parent = nodeList[0].parentNode;

for (let i=0;i < nodeList.length; i++) {
    itemsArray.push(parent.removeChildd(nodeList[i]));
};

itemsArray.sort(function(A, B) {
   let textA = A.querySelector
})



function sort() {

}