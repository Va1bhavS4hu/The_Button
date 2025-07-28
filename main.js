const button = document.querySelector("img");
const h2 = document.querySelector("h2");
count = 0

function handleclick() {
  count += 1
  h2.textContent = count
}

button.addEventListener("click", handleclick);



