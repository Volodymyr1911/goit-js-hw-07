const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");
const controlsContainer = document.getElementById("controls");

inputRef.style.height = "40px";
inputRef.style.width = "120px";
inputRef.style.borderRadius = "8px";
inputRef.style.border = "1px solid #808080";
inputRef.style.textAlign = "center";

createBtnRef.style.backgroundColor = "#4E75FF";
createBtnRef.style.color = "#ffffff";
createBtnRef.style.borderRadius = "8px";
createBtnRef.style.height = "40px";
createBtnRef.style.width = "120px";
createBtnRef.style.border = "0";
createBtnRef.style.fontSize = "16px";
createBtnRef.style.letterSpacing = "0.04em";

destroyBtnRef.style.backgroundColor = "#FF4E4E";
destroyBtnRef.style.width = "120px";
destroyBtnRef.style.height = "40px";
destroyBtnRef.style.borderRadius = "8px";
destroyBtnRef.style.color = "#ffffff";
destroyBtnRef.style.border = "0";
destroyBtnRef.style.fontSize = "16px";
destroyBtnRef.style.letterSpacing = "0.04em";

controlsContainer.style.borderRadius = "8px";
controlsContainer.style.padding = "32px";
controlsContainer.style.width = "486px";
controlsContainer.style.height = "104px";
controlsContainer.style.background = "#f6f6fe";
controlsContainer.style.display = "flex";
controlsContainer.style.gap = "16px";

boxesContainerRef.style.backgroundColor = "#f6f6fe";
boxesContainerRef.style.borderRadius = "8px";
boxesContainerRef.style.width = "486px";
boxesContainerRef.style.height = "134px";
boxesContainerRef.style.marginTop = "16px";
boxesContainerRef.style.display = "flex";
boxesContainerRef.style.gap = "44px";
boxesContainerRef.style.paddingTop = "32px";
boxesContainerRef.style.paddingLeft = "32px";

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputRef.value;

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainerRef.appendChild(div);
  }

  inputRef.value = "";
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
