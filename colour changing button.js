const colorButton = document.getElementById('color-changer');
let isRed = true;

colorButton.addEventListener('click', () => {
  isRed = !isRed;
  colorButton.style.backgroundColor = isRed ? "#ff6b6b" : "#48dbfb";
});
