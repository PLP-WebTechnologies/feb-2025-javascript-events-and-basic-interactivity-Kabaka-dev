passwordInput.addEventListener('input', () => {
  const feedback = document.getElementById('password-feedback');
  
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password is good!";
    feedback.style.color = "green";
  }
});
