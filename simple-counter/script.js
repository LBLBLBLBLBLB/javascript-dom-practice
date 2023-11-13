const number = document.getElementById("number");
const buttons = document.querySelectorAll("button");
let value = 0;

const updateCounterDisplay = () => {
  number.innerText = value;
  if (value < 0) {
    number.style.color = "red";
  } else if (value > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    if (action === "decrease") {
      value--;
    } else if (action === "increase") {
      value++;
    } else if (action === "reset") {
      value = 0;
    }
    updateCounterDisplay();
  });
});
