/*BOUTON RETOUR VERS LE HAUT*/

mybutton = document.getElementById("myBtn");
window.addEventListener("scroll", function(){
if (document.documentElement.scrollTop > 200) {
mybutton.style.bottom = "30px";
} else {
mybutton.style.bottom = "-100px";
}
});

function topFunction() {
$("html").animate({ scrollTop: "0" }, "600");
}

/*mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    }  
     else {
    mybutton.style.display = "none";
    }
}
function topFunction() {
    $("html").animate({ scrollTop: "0" }, "600");
}*/