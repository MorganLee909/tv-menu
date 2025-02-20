export default class Youtube{
    constructor(){
        console.log("yt page");

        this.navigator();
    }

    navigator(){
        document.addEventListener("keydown", (event)=>{
            switch(event.key){
                case "h": window.changePage("home"); break;
            }
        });
    }
}
