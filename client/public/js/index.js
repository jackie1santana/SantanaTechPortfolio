// Change style of navbar on scroll
window.onscroll = myFunction;

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-navbar w3-card-2 w3-animate-top w3-cyan";
  } else {
    navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-cyan", "");
  }
}

// Function to change the color of the element
function changeColor(element, color, delay) {
  setTimeout(() => { element.style.color = color; }, delay);
}

// Transitioning the color of the name
function toggleNameColor() {
  const firstColor = document.querySelector(".first-name");
  const lastColor = document.querySelector(".last-name");
  setInterval(() => {
    changeColor(firstColor, "hotpink", 1000);
    changeColor(lastColor, "cyan", 3000);
  }, 1000);
}

toggleNameColor();

// Change About me Color
function changeAboutMeColor() {
  const letters = ['a', 'b', 'o', 'u', 't', 'm', 'e'];
  setInterval(() => {
    letters.forEach((letter, index) => {
      changeColor(document.querySelector(`#${letter}`), "hotpink", (index + 1) * 1000);
    });
  }, 1000);
}

changeAboutMeColor();

// Loader
window.addEventListener("load", () => {
  var loader = document.querySelector(".loader");
  var word = document.querySelector("#word");
  loader.style.display = "none";
  word.style.display = "none";
});

// Firebase Form Data
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Send Form to Backend Database
  fetch("/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  })
  .then(response => response.json())
  .catch(error => console.error("error", error));

  // Show alert and clear form input after message sent
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => { document.querySelector(".alert").style.display = "none"; }, 3000);
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// the current year in the footer for the copyright notice
function currentYear() {
  const year = new Date().getFullYear();
  var elements = document.getElementsByClassName("copyright-year");

  // Loop through the elements and set the text content
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = year;
  }

}

// Call the function to insert the year
currentYear();

