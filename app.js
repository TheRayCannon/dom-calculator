const buttons = document.querySelectorAll("span");
const screen = document.querySelector("#screen");
const operators = document.querySelectorAll(".operator");

const allNumbers = document.querySelectorAll("span:not(.operator)");
const clear = document.querySelector("#clear")

/*
const buttonsArray = Array.from(buttons);
operator[1].innerText = "/"
operator[2].innerText = "*"
*/



allNumbers.forEach(number => {
    number.addEventListener("click", event => {
        switch (screen.textContent) {
            case "ERROR":
                screen.textContent = "ERROR"
                break;
            default:
                screen.textContent += event.target.textContent
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", event => {
        switch (operator.textContent) {
            case "=":
                screen.textContent = eval(screen.textContent)
                break;
            case "X":
                screen.textContent += "*"
                break;
            case "÷":
                screen.textContent += "/"
                break;
            default:
                screen.textContent += event.target.textContent
        }
    })
})


clear.addEventListener("click", () => {
    screen.textContent = ""
})





/*
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
    if (screen.textContent[0] === "0") {
        screen.textContent = "ERROR"
    }
}))*/