const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const displayNum = document.querySelector(".display-number");
let num = 0;

increase.addEventListener("click", function() {
    num++;
    displayNum.innerHTML = num;
    changeColorOfNum();
});
reset.addEventListener("click", function() {
    num = 0;
    displayNum.innerHTML = num;
    changeColorOfNum();
});
decrease.addEventListener("click", function() {
    num--;
    displayNum.innerHTML = num;
    changeColorOfNum();
});
const changeColorOfNum = function() {
    if (num === 0) {
        displayNum.style.color = "black";
    } else if (num > 0) {
        displayNum.style.color = "green";
    } else if (num < 0) {
        displayNum.style.color = "red";
    }
}