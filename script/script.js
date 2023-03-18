const menu = document.getElementById("menu");
const navBar = document.querySelector(".navber");

menu.addEventListener("click", (eo) => {
  navBar.classList.toggle("active")
}
)
    
window.onscroll = () => {
    navBar.classList.remove("active");
}


let dropdown_items = document.querySelectorAll(".items");

dropdown_items.forEach(items => {
    items.onclick = () => {
        items_parent = items.parentElement.parentElement;
        const output = items_parent.querySelector(".output");
        output.value = items.innerText;
    }
})