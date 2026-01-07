const mainPassword = document.getElementById("mainPassword");
const confirmPassword = document.getElementById("confirmPassword");
const progress = document.querySelector(".progress");
const strengthText = document.querySelector(".text");
const range = document.querySelector(".range");
const submitBtn = document.querySelector(".submitBtn button");

mainPassword.addEventListener("input", checkPassword);

function checkPassword() {
  const password = mainPassword.value;

  // FLAGS
  let hasLower = false;
  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  // CHECK EACH CHARACTER
  for (let char of password) {
    if (char >= "a" && char <= "z") hasLower = true;
    else if (char >= "A" && char <= "Z") hasUpper = true;
    else if (char >= "0" && char <= "9") hasNumber = true;
    else hasSpecial = true;
  }

  // COUNT RULES
  let score = 0;
  if (hasLower) score++;
  if (hasUpper) score++;
  if (hasNumber) score++;
  if (hasSpecial) score++;
  if (password.length >= 8) score++;

  // RESET
  progress.className = "progress";
  submitBtn.disabled = true;

  // STRENGTH DECISION
  if (score <= 2) {
    progress.classList.add("weak");
    strengthText.textContent = "Weak";
    range.value = 30;
  } else if (score <= 4) {
    progress.classList.add("medium");
    strengthText.textContent = "Medium";
    range.value = 60;
  } else {
    progress.classList.add("strong");
    strengthText.textContent = "Strong";
    range.value = 100;

    // ENABLE BUTTON IF PASSWORDS MATCH
    if (password === confirmPassword.value) {
      submitBtn.disabled = false;
    }
  }
}
