const buttons = document.querySelectorAll("span");
const screen = document.querySelector("#screen");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const buttonsArray = Array.from(buttons);
document.querySelectorAll('.operator')[1].innerText = "/"
document.querySelectorAll('.operator')[2].innerText = "*"

buttonsArray.map(button => button.addEventListener("click", event => {
    if (button.innerText !== "=") {
        screen.innerText += button.innerText
    };
    if (button.innerText === "=") {
        screen.innerText = eval(screen.innerText)
    };
    if (button.innerText === "C") {
        screen.textContent = ""
    };
    if (screen.textContent === "Infinity") {
        screen.innerText = "ERROR"
    };
}))