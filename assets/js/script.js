const submitBtn = document.getElementById('submit-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMessages = document.querySelectorAll('.error-message');
const formGroup = document.getElementById('form-group');

function showError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.textContent = message;
  errorElement.classList.add('visible');
}

function clearError(input, errorElement) {
  input.classList.remove('error');
  errorElement.textContent = '';
  errorElement.classList.remove('visible');
}


// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Prevent form submission
formGroup.addEventListener('submit', function (e) {
  e.preventDefault();
});

// Validate on submit button click
submitBtn.addEventListener('click', function () {
  errorMessages.forEach((errorMessage) => clearError(errorMessage, errorMessage));

  // Validate First Name
  if (firstName.value.trim() === '') {
    showError(firstName, errorMessages[0], 'First Name cannot be empty');
  } else {
    clearError(firstName, errorMessages[0]);
  }

  // Validate Last Name
  if (lastName.value.trim() === '') {
    showError(lastName, errorMessages[1], 'Last Name cannot be empty');
  } else {
    clearError(lastName, errorMessages[1]);
  }

  // Validate Email
  if (email.value.trim() === '') {
    showError(email, errorMessages[2], 'Email cannot be empty');
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, errorMessages[2], 'Looks like this is not an email');
  } else {
    clearError(email, errorMessages[2]);
  }

  // Validate Password
  if (password.value.trim() === '') {
    showError(password, errorMessages[3], 'Password cannot be empty');
  } else {
    clearError(password, errorMessages[3]);
  }
});
