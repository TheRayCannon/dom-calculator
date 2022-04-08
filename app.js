const buttons = document.querySelectorAll("span");
const screen = document.querySelector("#screen");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");



buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (button.textContent === "+") {
            screen.textContent += `+`
        } else if (button.textContent === "÷") {
            screen.textContent += `/`
        } else if (button.textContent === "C") {
            screen.textContent = ` `
        } else {
            screen.textContent += `${button.textContent}`
        }
    })
})