const animatedBox = document.getElementById('animate-me');

animatedBox.addEventListener('click', () => {
  animatedBox.style.transition = "all 0.5s ease";
  animatedBox.style.transform = "rotate(360deg)";
  
  setTimeout(() => {
    animatedBox.style.transform = "rotate(0deg)";
  }, 500);
});
