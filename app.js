const $buttons = document.querySelectorAll("span:not(.operator)");
const $screen = document.querySelector("#screen");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelector("#clear")


$buttons.forEach((button) => {
    button.addEventListener("click", () => {
        $screen.textContent += button.textContent;
    });
});


$operators.forEach(($operator) => {
    $operator.addEventListener("click", () => {
        switch ($operator.textContent) {
            case "=":
                $screen.textContent = eval($screen.textContent)
                break;
            case "÷":
                $screen.textContent += "/"
                break;
            case "x":
                $screen.textContent += "*"
                break;
            default:
                $screen.textContent += $operator.textContent


        }
    })
})



$clear.addEventListener("click", () => {
    $screen.textContent = ""
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


 $operators.forEach(($operator) => {
    $operator.addEventListener("click", () => {
        if ($operator.textContent === "=") {
            $screen.textContent = eval($screen.textContent)
        } else if ($operator.textContent === "÷") {
            $screen.textContent += "/"
        } else if ($operator.textContent === "x") {
            $screen.textContent += "*"
        } else {
            $screen.textContent += $operator.textContent
        }
    })
})
   
}))*/