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