let inputs = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputs.value = string;
    } else if (e.target.innerHTML == "RESET") {
      string = "";
      inputs.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inputs.value = string;
    } else {
      string = string + e.target.innerHTML;
      inputs.value = string;
    }
  });
});
