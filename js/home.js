export default class Home{
    constructor(){
        this.container = document.getElementById("home");
        this.tbody = this.container.querySelector("table tbody");
        this.row = 0;
        this.column = 0;
        this.active = this.tbody.children[0].children[0].children[0];
        this.navigation();
    }

    navigation(){
        document.addEventListener("keydown", (event)=>{
            switch(event.key){
                case "ArrowRight": this.updateFocus(0, 1); break;
                case "ArrowLeft": this.updateFocus(0, -1); break;
                case "ArrowUp": this.updateFocus(-1, 0); break;
                case "ArrowDown": this.updateFocus(1, 0); break;
                case "Enter": this.active.click(); break;
            }
        });
    }

    updateFocus(row = 0, column = 0){
        let active;
        try{
            active = this.tbody.children[this.row+row].children[this.column+column].children[0];
        }catch(e){
            return;
        }
        this.row += row;
        this.column += column;

        for(let i = 0; i < this.tbody.children.length; i++){
            for(let j = 0; j < this.tbody.children[i].children.length; j++){
                this.tbody.children[i].children[j].children[0].classList.remove("active");
            }
        }

        active.classList.add("active");
        this.active = active;
    }
}
