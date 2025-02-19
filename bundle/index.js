(() => {
  // js/home.js
  var home_default = () => {
    console.log("home page");
  };

  // js/youtube.js
  var youtube_default = () => {
    console.log("yt");
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
        home_default();
        break;
      case "youtube":
        youtube_default();
        break;
    }
  };
  home_default();
})();
