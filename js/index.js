import homePage from "./home.js";

const pages = document.querySelectorAll(".page");

window.changePage = (page)=>{
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    document.getElementById(page).style.display = "flex";
}
