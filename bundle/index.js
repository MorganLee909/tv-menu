(() => {
  // js/home.js
  var Home = class {
    constructor() {
      this.container = document.getElementById("home");
      this.tbody = this.container.querySelector("table tbody");
      this.row = 0;
      this.column = 0;
      this.active = this.tbody.children[0].children[0].children[0];
      this.navigation();
    }
    navigation() {
      document.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowRight":
            this.updateFocus(0, 1);
            break;
          case "ArrowLeft":
            this.updateFocus(0, -1);
            break;
          case "ArrowUp":
            this.updateFocus(-1, 0);
            break;
          case "ArrowDown":
            this.updateFocus(1, 0);
            break;
          case "Enter":
            this.active.click();
            break;
        }
      });
    }
    updateFocus(row = 0, column = 0) {
      let active;
      try {
        active = this.tbody.children[this.row + row].children[this.column + column].children[0];
      } catch (e) {
        return;
      }
      this.row += row;
      this.column += column;
      for (let i = 0; i < this.tbody.children.length; i++) {
        for (let j = 0; j < this.tbody.children[i].children.length; j++) {
          this.tbody.children[i].children[j].children[0].classList.remove("active");
        }
      }
      active.classList.add("active");
      this.active = active;
    }
  };

  // js/youtube.js
  var Youtube = class {
    constructor() {
      console.log("yt page");
      this.navigator();
    }
    navigator() {
      document.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "h":
            window.changePage("home");
            break;
        }
      });
    }
  };

  // js/fireplace.js
  var Fireplace = class {
    constructor() {
      this.container = document.getElementById("fireplace");
      this.navigator();
      this.addVideo();
    }
    navigator() {
      document.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "h":
            window.changePage("home");
            break;
        }
      });
    }
    addVideo() {
      const iframe = document.createElement("iframe");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.src = "https://www.youtube.com/embed/iaQBQp5tgcw?si=hrsCYgWa1Td5zebh&autoplay=1";
      this.container.appendChild(iframe);
    }
  };

  // js/index.js
  var pages = document.querySelectorAll(".page");
  window.changePage = (page) => {
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    document.getElementById(page).style.display = "flex";
    switch (page) {
      case "home":
        new Home();
        break;
      case "youtube":
        new Youtube();
        break;
      case "fireplace":
        new Fireplace();
        break;
    }
  };
  new Home();
})();
