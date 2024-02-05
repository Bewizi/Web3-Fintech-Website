"use strict";

// loginForm.addEventListener("submit", handleLogin);
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkIcon = document.querySelector(".check-icon");
const infoIcon = document.querySelector(".info-icon");

const checkIconPassword = document.querySelector(".check-icon-password");
const infoIconPassword = document.querySelector(".info-icon-password");

// let isValidEmail;

const loginDetails = {
  email: "tolusamule@hotmail.com",
  password: 123456789,
};

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = email.value;
  const userPassword = parseInt(password.value, 10);
  if (
    userEmail === loginDetails.email &&
    userPassword === loginDetails.password
  ) {
    console.log("Correct login details");
    window.location.href = "web3-fintech.html";
    // showSuccessMessage();
    checkIcon.style.color = "#4ade80";
    checkIcon.style.display = "block";
    infoIcon.style.display = "none";

    checkIconPassword.style.color = "#4ade80";
    checkIconPassword.style.display = "block";
    infoIconPassword.style.display = "none";
  } else {
    // checkPassword(email);
    console.log("incorrect  email and password");
    infoIcon.style.color = "#ef4444";
    infoIcon.style.display = "block";
    checkIcon.style.display = "none";

    infoIconPassword.style.color = "#ef4444";
    infoIconPassword.style.display = "block";
    checkIconPassword.style.display = "none";
  }

  // if (userPassword === loginDetails.password) {
  //   console.log("correct password");
  // } else {
  //   console.log("wrong password");
  // }
  // e.target.submit();
});
