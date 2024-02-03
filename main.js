"use strict";
/* 
// Prompt and parseInt
const name = prompt('Enter username')
const age = parseInt(prompt('Enter age'))
let user = {
  name: "",
  age: "",

  
};
user.sayHi = function () {
  // alert(this.name), alert(this.age);
  alert(`${this['name']} ${this['age']}`)
},
console.log(name, age);
user.sayHi();
*/
// const dateAndMonth = document.querySelector(".date-month");
// const specificDate = new Date("2024-01-03");
// const formattedDate = specificDate.toLocaleDateString("en-US", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });
// dateAndMonth.textContent = formattedDate;

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
