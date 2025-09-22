const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Handle equals
equals.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString(); 
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
