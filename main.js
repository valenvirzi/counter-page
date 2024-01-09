let btnMinus = document.getElementById("btnMinus");
let btnReset = document.getElementById("btnReset");
let btnPlus = document.getElementById("btnPlus");
let numberDisplay = document.getElementById("numberDisplay");

document.addEventListener("DOMContentLoaded", function (event) {
  numberDisplay.innerText = localStorage.getItem("storedCounter") || 0;

  function increment() {
    numberDisplay.innerText = Number(numberDisplay.innerText) + 1;
    storeValue();
  }
  function decrement() {
    numberDisplay.innerText = Number(numberDisplay.innerText) - 1;
    storeValue();
  }
  function reset() {
    numberDisplay.innerText = 0;
    localStorage.removeItem("storedCounter");
  }

  function storeValue() {
    let newValue = numberDisplay.innerText;
    localStorage.setItem("storedCounter", newValue);
  }

  btnMinus.addEventListener("click", decrement);
  btnPlus.addEventListener("click", increment);
  btnReset.addEventListener("click", reset);
});
