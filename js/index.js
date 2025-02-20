import Home from "./home.js";
import youtubePage from "./youtube.js";

const pages = document.querySelectorAll(".page");

window.changePage = (page)=>{
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    document.getElementById(page).style.display = "flex";

    switch(page){
        case "home": new Home(); break;
        case "youtube": youtubePage(); break;
    }
}

new Home();
