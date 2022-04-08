const buttons = document.querySelectorAll("span");
const screen = document.querySelector("#screen");
const operator = document.querySelectorAll(".operator");
const buttonsArray = Array.from(buttons);
operator[1].innerText = "/"
operator[2].innerText = "*"

buttonsArray.map(button => button.addEventListener("click", event => {

    if (button.textContent !== "=") {
        screen.textContent += button.innerText
    } else {
        screen.textContent = eval(screen.textContent)
    };
    if (button.textContent === "C") {
        screen.textContent = ""
    };
    if (screen.textContent === "Infinity") {
        screen.textContent = "ERROR"
    };
}))