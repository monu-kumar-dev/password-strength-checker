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

pass.addEventListener("input", check);
confirmPass.addEventListener("input", check);



