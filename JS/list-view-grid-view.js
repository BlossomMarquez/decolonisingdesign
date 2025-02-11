document.addEventListener("DOMContentLoaded", function () {
    const listViewBtn = document.querySelector("#top2 a:nth-child(1) img"); // List view icon
    const gridViewBtn = document.querySelector("#top2 a:nth-child(2) img"); // Grid view icon
    const subcontainer = document.getElementById("subcontainer");
    const articles = document.querySelectorAll("#subcontainer > div");

    // Store the original icon src values
    const listViewIconDefault = "./Icons/List View Icon.svg";
    const gridViewIconDefault = "./Icons/Grid View Icon.svg";
    const listViewIconActive = "./Icons/List View Active.svg"; // New active icon
    const gridViewIconActive = "./Icons/Grid View Active.svg"; // New active icon

    listViewBtn.addEventListener("click", function (e) {
        e.preventDefault();
        subcontainer.style.display = "block";// Change to block layout
        // subcontainer.style.gridTemplateRows = "auto";
        // subcontainer.style.gridTemplateColumns = "1fr"
        subcontainer.style.border = "none";
        subcontainer.style.marginBottom = "2rem";
        subcontainer.style.overflowY = "auto";  
        articles.forEach(article => {
            article.style.display = "block";
            article.style.width = "100%";
            article.style.marginBottom = "0";
            article.style.border = "none";
        });

        // Change icon states
        listViewBtn.src = listViewIconActive;
        gridViewBtn.src = gridViewIconDefault;
    });

    gridViewBtn.addEventListener("click", function (e) {
        e.preventDefault();
        subcontainer.style.display = "grid"; // Change back to grid layout
        subcontainer.style.gridTemplateColumns = "50% 50%";
        subcontainer.style.gridTemplateRows = "repeat(5, auto)";
        subcontainer.style.border = "0.1vw solid #32B655";
        subcontainer.style.gap = "0"; // Removes gap between grid items
        articles.forEach(article => {
            article.style.display = "block";
            article.style.width = "auto";
            article.style.marginBottom = "0";
        });

        // Change icon states
        gridViewBtn.src = gridViewIconActive;
        listViewBtn.src = listViewIconDefault;
    });
});
