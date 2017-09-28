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

/***
 * The code below wil allow us to hide/show the control-panel div when
 * clicking on the control-panel-btn
 * @type {Element}
 */
//Get the button using the id
var button = document.getElementById("control-panel-btn");
//Get the div using the id
var controlPanel = document.getElementById("control-panel");

//The function that will trigger the control-panel div
function triggerControlPanel() {
    if(controlPanel.style.display === "block"){
        button.innerText = "Show control panel";
        controlPanel.style.display = "none";
    }else {
        button.innerText = "Hide control panel";
        controlPanel.style.display = "block";

    }
}

/***
 * The code bellow will allow us to change the color of some divs
 *
 */

//Define all of the divs
var navigation = document.getElementById("navigation-container");
var subContent = document.getElementById("sub-content");
var footer = document.getElementById("footer");

//A function to change to red theme
function redTheme() {
    navigation.style.backgroundImage = "url('resources/img/redTheme.jpg')";
    controlPanel.style.backgroundImage = "url('resources/img/redTheme.jpg')";
    subContent.style.backgroundImage = "url('resources/img/redTheme.jpg')";
    footer.style.backgroundImage = "url('resources/img/redTheme.jpg')";
}

//A function to change to black theme
function blackTheme() {
    navigation.style.backgroundImage = "url('resources/img/footer.jpg')";
    controlPanel.style.backgroundImage = "url('resources/img/footer.jpg')";
    subContent.style.backgroundImage = "url('resources/img/footer.jpg')";
    footer.style.backgroundImage = "url('resources/img/footer.jpg')";
}

//A function to change to blue theme
function blueTheme() {
    navigation.style.backgroundImage = "url('resources/img/blueTheme.jpg')";
    controlPanel.style.backgroundImage = "url('resources/img/blueTheme.jpg')";
    subContent.style.backgroundImage = "url('resources/img/blueTheme.jpg')";
    footer.style.backgroundImage = "url('resources/img/blueTheme.jpg')";
}