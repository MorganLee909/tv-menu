import Home from "./home.js";
import Youtube from "./youtube.js";
import Fireplace from "./fireplace.js";

const pages = document.querySelectorAll(".page");

window.changePage = (page)=>{
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    document.getElementById(page).style.display = "flex";

    switch(page){
        case "home": new Home(); break;
        case "youtube": new Youtube(); break;
        case "fireplace": new Fireplace(); break;
    }
}

new Home();
