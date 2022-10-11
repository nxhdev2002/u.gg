document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("nav-toggle").addEventListener("click", () => {
        let action;
        document.getElementById("side-nav-container").getAttribute("class") === "expanded" ? action = "collapsed" : action = "expanded"
        document.getElementById("side-nav-container").setAttribute("class", action)
        document.getElementById("side-nav").setAttribute("class", action)
    })
});
