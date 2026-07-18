// Select Elements
const mainTitle = document.querySelector("#title");

const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");

let curValue = 0;

function updateCounter() {
    mainTitle.textContent = curValue;

    if (curValue > 0) {
        mainTitle.style.color ="#04344ce6";
    } else if (curValue < 0) {
        mainTitle.style.color = "#dff2f9";
    } else {
        mainTitle.style.color ="#464343";
    }
}

btnIncrement.addEventListener("click", () => {
    curValue++;
    updateCounter();
});

btnDecrement.addEventListener("click", () => {
    curValue--;
    updateCounter();
});

btnReset.addEventListener("click", () => {
    curValue = 0;
    updateCounter();
});

updateCounter();