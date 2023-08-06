const menu = document.getElementById("menu-icon");
const navbar = document.getElementsByClassName("navbar");

menu.addEventListener("click",function () {
    navbar.classList.toggle("active");
});
  
window.onscroll = () => {
    navbar.classList.remove("active");
};
