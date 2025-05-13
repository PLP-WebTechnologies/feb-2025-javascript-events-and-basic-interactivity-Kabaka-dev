const secretButton = document.getElementById('secret');

secretButton.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = "#2ecc71";
  alert("Secret mode activated!");
});
