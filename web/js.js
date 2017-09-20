/***
 * This function will switch between css classes to open or collapse the navigation bar
 */
function navigationToggle() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function load_navbar() {
    document.getElementById("nav-container").innerHTML='<object type="text/html" width="100%" data="WEB-INF/navigation-bar.html" ></object>';
}