document.addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
  if (e.key === "Escape") {
    alert("Escape key pressed!");
  }
});
