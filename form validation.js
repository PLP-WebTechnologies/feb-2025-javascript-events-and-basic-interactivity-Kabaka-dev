const form = document.getElementById('my-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Required field check
  if (!emailInput.value || !passwordInput.value) {
    alert("Please fill in all fields!");
    return;
  }
  
  // Email validation
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    alert("Please enter a valid email!");
    return;
  }
  
  // Password validation
  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }
  
  // If all validations pass
  alert("Form submitted successfully!");
  form.reset();
});
