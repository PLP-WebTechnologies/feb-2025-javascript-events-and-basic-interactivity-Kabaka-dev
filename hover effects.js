const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.transform = "scale(1.1)";
});

hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.transform = "scale(1)";
});
