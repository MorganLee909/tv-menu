export default class Fireplace{
    constructor(){
        this.container = document.getElementById("fireplace");
        this.navigator();
        this.addVideo();
    }

    navigator(){
        document.addEventListener("keydown", (event)=>{
            switch(event.key){
                case "h":
                    this.removeIframe();
                    window.changePage("home");
                    break;
            }
        });
    }

    addVideo(){
        const iframe = document.createElement("iframe");
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.src = "https://www.youtube.com/embed/iaQBQp5tgcw?si=hrsCYgWa1Td5zebh&autoplay=1";
        this.container.appendChild(iframe);
    }

    removeIframe(){
        this.container.removeChild(this.container.children[0]);
    }
}
