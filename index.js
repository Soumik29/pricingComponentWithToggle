const toggleButton = document.getElementById("toggleButton");
const toggleBackGround = document.getElementById("toggleBg");
const toggleEventHandler = function toggleEventHandler(){
  toggleButton.addEventListener("click", () => {
    const amounts = document.querySelectorAll(".amount");
    // console.log(toggleBackGround.classList.contains("monthly"));
    toggleBackGround.classList.toggle("monthly");
    if (toggleBackGround.classList.contains("monthly")) {
      amounts.forEach((element) => {
        if (element.innerHTML == "199.99") {
          element.textContent = "19.99";
        } else if (element.innerHTML == "249.99") {
          element.textContent = "24.99";
        } else {
          element.textContent = "39.99";
        }
      });
    } else {
      amounts.forEach((element) => {
        if (element.innerHTML == "19.99") {
          element.textContent = "199.99";
        } else if (element.innerHTML == "24.99") {
          element.textContent = "249.99";
        } else {
          element.textContent = "399.99";
        }
      });
    }
  });
}
toggleEventHandler();
