// script.js
const clickButton = document.getElementById('click-me');

clickButton.addEventListener('click', () => {
  clickButton.textContent = "You clicked me!";
  clickButton.style.backgroundColor = "#ff6b6b";
});
