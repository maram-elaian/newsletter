function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Reset previous error
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';

    // Validate email
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('error');
      errorMessage.style.display = 'block';
    } else {
     window.location.href='thank.html'
    }
  }