const menu = document.getElementById("menu");
const navBar = document.querySelector(".navber");

menu.addEventListener("click", (eo) => {
  navBar.classList.toggle("active")
}
)
    
window.onscroll = () => {
    navBar.classList.remove("active");
}
