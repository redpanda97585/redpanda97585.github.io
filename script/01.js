bodyElement = document.body;
mainContainer = document.querySelector(".main-container");
mode = false;
document.querySelector(".style-button").onclick = function () {
    if (mode === false) {
        bodyElement.style.background = "black";
        bodyElement.style.color = "white";
        mode = true;
    } else {
        bodyElement.style.background = "white";
        bodyElement.style.color = "black";
        mode = false;
    }
}