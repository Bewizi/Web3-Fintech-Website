"use strict";

const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closebar");
const navList = document.querySelector(".list");

openMenu.addEventListener("click", () => {
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  navList.style.display = "block";
  navList.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  navList.style.display = "none";
  navList.classList.remove("show");
});

// Update of [Month,Date,Day]
function updateDate() {
  const westAfricaTimezone = "Africa/Lagos"; // Set the timezone for West Africa

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: westAfricaTimezone,
  };

  const westAfricaDate = new Date().toLocaleDateString("en-US", options);
  document.querySelector(".date-month").textContent = westAfricaDate;
}

// Initial call to set the date when the page loads
updateDate();

// Set up an interval to update the date every day
setInterval(updateDate, 24 * 60 * 60 * 1000);

// Click to go back to the login page
const logout = document
  .querySelector(".logout")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
