const button = document.querySelector("img");
const h2 = document.querySelector("h2");
count = 0

function downclick() {
	document.querySelector("img").src = "Button_Down.png";
	new Audio("click_down.mp3").play();
}

function upclick() {
	document.querySelector("img").src = "Button.png";
	new Audio("click_up.mp3").play();
}

function handleclick() {
  count += 1
  h2.textContent = count
}

button.addEventListener("mousedown", downclick);
button.addEventListener("mouseup", upclick);
button.addEventListener("click", handleclick);



