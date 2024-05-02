const moon = document.getElementById("moon");
const cityLeft = document.getElementById("cityLeft");
const cityRight = document.getElementById("cityRight");
const heroText = document.querySelector(".hero p");

window.addEventListener("scroll", ()=>{
    const scrollValue = window.scrollY;
    moon.style.top = scrollValue * 0.8 + "px";
    heroText.style.marginTop = scrollValue * 1 +'px';
    cityLeft.style.left = scrollValue * -1.2 + "px";
    cityRight.style.left = scrollValue * 1.2 + "px";

})