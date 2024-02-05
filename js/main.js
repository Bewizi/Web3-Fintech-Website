"use strict";

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
