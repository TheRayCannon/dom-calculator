const $buttons = document.querySelectorAll("span:not(.operator)");
const $screen = document.querySelector("#screen");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelector("#clear");

$buttons.forEach((button) => {
    button.addEventListener("click", () => {
        $screen.textContent += button.textContent;
    });
});

$operators.forEach(($operator) => {
    $operator.addEventListener("click", () => {
        switch ($operator.textContent) {
            case "=":
                const result = $screen.textContent = eval($screen.textContent)
                $screen.textContent = result == Infinity ?
                    "Error" : result
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
    });
});

$clear.addEventListener("click", clearScreen)

function clearScreen() {
    $screen.textContent = "";
}