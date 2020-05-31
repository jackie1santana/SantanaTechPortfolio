// Change style of navbar on scroll
window.onscroll = function () {
  
  myFunction();
};



function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className =
      "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-cyan";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card-2 w3-animate-top w3-cyan",
      ""
    );
  }
}

//Transitioning the color of the name
const firstColor = document.querySelector(".first-name");
const lastColor = document.querySelector(".last-name");
const colorSwitch = "on";

function nameColor() {
  function fColor1() {
    if (colorSwitch === "on") {
      setTimeout(function () {
        firstColor.style.color = "hotpink";
      }, 1000);
    }
  }

  function lColor1() {
    setTimeout(function () {
      lastColor.style.color = "cyan";
    }, 3000);
  }

  fColor1();
  lColor1();
}

setInterval(nameColor, 1000);

function stopColor() {
  function fColor2() {
    setTimeout(function () {
      firstColor.style.color = "white";
    }, 1000);
  }

  function lColor2() {
    setTimeout(function () {
      lastColor.style.color = "white";
    }, 3000);
  }

  fColor2();
  lColor2();
}

setInterval(stopColor, 6000);

//change About me Color

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const o = document.querySelector("#o");
const u = document.querySelector("#u");
const t = document.querySelector("#t");

const m = document.querySelector("#m");
const e = document.querySelector("#e");

const colorSwitch2 = "on";

var setFunc = function nameColor2() {
  if (colorSwitch2 === "on") {
    function a1() {
      setTimeout(function () {
        a.style.color = "hotpink";
      }, 1000);
    }

    function b2() {
      setTimeout(function () {
        b.style.color = "hotpink";
      }, 2000);
    }

    function o3() {
      setTimeout(function () {
        o.style.color = "hotpink";
      }, 3000);
    }

    function u4() {
      setTimeout(function () {
        u.style.color = "hotpink";
      }, 4000);
    }

    function t5() {
      setTimeout(function () {
        t.style.color = "hotpink";
      }, 5000);
    }

    function m6() {
      setTimeout(function () {
        m.style.color = "hotpink";
      }, 6000);
    }

    function e7() {
      setTimeout(function () {
        e.style.color = "hotpink";
      }, 7000);
    }
  }
  a1();
  b2();
  o3();
  u4();
  t5();
  m6();
  e7();
};

setInterval(setFunc, 1000);

//Loader

window.addEventListener("load", function () {

  var loader = document.querySelector(".loader");
  var word = document.querySelector("#word");
  loader.style.display = "none";
  word.style.display = "none";
});

//Firebase Form Data
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Send Form to Backend Database
  fetch("http://localhost:4000/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.log("error", error));

  //show alert
  document.querySelector(".alert").style.display = "block";

  //hide alert

  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //clear form input after message sent
  document.getElementById("contactForm").reset();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
