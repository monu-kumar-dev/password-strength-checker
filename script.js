const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm");
const rules = {
  len: document.getElementById("len"),
  low: document.getElementById("low"),
  up: document.getElementById("up"),
  num: document.getElementById("num"),
  sp: document.getElementById("sp"),
};
const progress = document.querySelector(".progress");
const text = document.querySelector(".text");
const error = document.querySelector(".error");
const button = document.querySelector("button");

function check() {
  const p = pass.value;

  const tests = {
    len: p.length >= 8,
    low: /[a-z]/.test(p),
    up: /[A-Z]/.test(p),
    num: /\d/.test(p),
    sp: /[^A-Za-z0-9]/.test(p),
  };

  let score = 0;

  for (let key in tests) {
    if (tests[key]) {
      rules[key].classList.add("valid");
      rules[key].textContent = "✔ " + rules[key].textContent.slice(2);
      score++;
    } else {
      rules[key].classList.remove("valid");
      rules[key].textContent = "❌ " + rules[key].textContent.slice(2);
    }
  }

  progress.className = "progress";
  if (score <= 2) {
    progress.classList.add("weak");
    text.textContent = "Weak";
  } else if (score <= 4) {
    progress.classList.add("medium");
    text.textContent = "Medium";
  } else {
    progress.classList.add("strong");
    text.textContent = "Strong";
  }

  if (p && p === confirmPass.value && score === 5) {
    error.style.display = "none";
    button.disabled = false;
  } else {
    error.style.display = confirmPass.value ? "block" : "none";
    button.disabled = true;
  }
}


pass.addEventListener("input", check);
confirmPass.addEventListener("input", check);



