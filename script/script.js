const menu = document.getElementById("menu");
const navBar = document.querySelector(".navber");

menu.addEventListener("click", (eo) => {
  navBar.classList.toggle("active")
}
)
    
window.onscroll = () => {
    navBar.classList.remove("active");
}

const hacker = document.getElementById("hacker")


hacker.addEventListener("click", (eo) => {
    alert("Thank you for clicked on this button, I hecked your Phone .. شكرا علشان دوست ع الزرار انا كدا هكرت تلفونك باي باي ");
}
  )