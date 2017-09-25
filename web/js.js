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

/***
 * The function written bellow will provide us with a button that you
 * can use to scroll back to the top of the page when on mobile
 */

// When the user scrolls down 20px from the top of the page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}