const registration = document.getElementById("registration");
const name = document.getElementById("rUsername");
const email = document.getElementById("rEmail");
const password = document.getElementById("rPassword");
const repeatPassword = document.getElementById("repeatPassword");
const errorDisplay = document.getElementById("errorDisplay");
const TOS = document.getElementById("TOS");

registration.addEventListener("submit", validate);

function validate(e) {
  const nameVal = validateUsername();
  if (nameVal === false) {
    e.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    e.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    e.returnValue = false;
    return false;
  }

  const passwordConfirm = confirmPassword();
  if (passwordConfirm === false) {
    e.returnValue = false;
    return false;
  }

  const tosVal = validateTOS();
  if (tosVal === false) {
    e.returnValue = false;
    return false;
  }

  return true;
}

function validateUsername() {
  let nameVal = name.value;
  console.log(nameVal);
  if (nameVal == "") {
    name.focus();
    return false;
  }
}

function validateEmail() {
  let emailVal = email.value;
  if (emailVal.includes("example.com") == true) {
    errorDisplay.textContent = "Use an email with a different domain.";
    errorDisplay.style.display = "block";
    email.focus();
    return false;
  }
}

function validatePassword() {
  let passwordVal = password.value;
  passwordVal.toLowerCase();
  if (passwordVal.contains("password") == true) {
    errorDisplay.textContent =
      "Your password cannot contain the word 'password'.";
    errorDisplay.style.display = "block";
    password.focus();
    return false;
  }
  if (passwordVal.contains(name.value) == true) {
    errorDisplay.textContent = "Your password cannot contain your username.";
    errorDisplay.style.display = "block";
    password.focus();
    return false;
  }
}

function confirmPassword() {
  let confirmPasswordVal = repeatPassword.value;
  if (confirmPasswordVal !== password.value) {
    errorDisplay.textContent = "Your passwords do not match.";
    errorDisplay.style.display = "block";
    repeatPassword.focus();
    return false;
  }
}

function validateTOS() {
  if (TOS == false) {
    errorDisplay.textContent =
      "You must agree to our Terms of Use before registering.";
    errorDisplay.style.display = "block";
    return false;
  }
}
