//document.getElementById("paw").style.display = "none";

const menu_buttons = document.getElementsByClassName("menu-item");

//When page loads, it will trigger the circle menu

window.onload = function () {
  var menuButton = document.getElementById("open-menu");
  menuButton.click();
  reveal();
};

function setAboutImage() {
  document.getElementById("center-pic").src = "https://i.imgur.com/4bOPC5D.png";
  document.getElementById("button-desc").innerHTML = "About me";
  document.getElementsByClassName("about-star").style.visibility = "visible";
}

function setWorkImage() {
  document.getElementById("center-pic").src = "https://i.imgur.com/mhOObig.png";
  document.getElementById("button-desc").innerHTML = "Projects";
}

function setPaintImage() {
  document.getElementById("center-pic").src = "https://i.imgur.com/D7o8FlG.png";
  document.getElementById("button-desc").innerHTML = "Artwork";
}

function setMailImage() {
  document.getElementById("center-pic").src = "https://i.imgur.com/gfFSfck.png";
  document.getElementById("button-desc").innerHTML = "Contact";
}

function setOldImage() {
  document.getElementById("center-pic").src = "https://i.imgur.com/OYTKeHM.png";
  document.getElementById("button-desc").innerHTML = "Hi! My name is Christa.";
}

/*
function showPaw() {
  document.getElementById("paw").style.display = "block";
  document.getElementById("button-desc").innerHTML = "Hi! My name is Christa.";
}

function hidePaw() {
  document.getElementById("paw").style.animation = "reverse-paw 0.5s ease-in";
  document.getElementById("paw").style.display = "none";
  document.getElementById("button-desc").innerHTML = "";
}*/

let clicked = false;

function animatePaw() {
  if (clicked) {
    clicked = false;
    document.getElementById("paw").classList.remove("slide-in");
    document.getElementById("paw").classList.add("slide-out");

    //document.getElementById("intro-text").style.visibility = "hidden";
  } else {
    clicked = true;
    document.getElementById("paw").classList.remove("slide-out");
    document.getElementById("paw").classList.add("slide-in");
  }
}

//back to top button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var reveals = document.querySelectorAll(".reveal");

function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);

var hiddenCards = document.querySelectorAll(".hidden-card");
let hiddenCardsBtn = false;

function showMore() {
  if (hiddenCardsBtn) {
    hiddenCardsBtn = false;
    document.getElementById("hidden-projects-btn").innerHTML =
      'Show more <i class="fa-solid fa-arrow-down"></i>';
    document.getElementById("hidden-projects").style.height = "0";

    for (var i = 0; i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove("active");
      hiddenCards[i].style.height = "0";

      hiddenCards[i].style.overflow = "hidden";
    }
  } else {
    hiddenCardsBtn = true;
    document.getElementById("hidden-projects-btn").innerHTML =
      'Show less <i class="fa-solid fa-arrow-up"></i>';
    document.getElementById("hidden-projects").style.height = "inherit";
    for (var i = 0; i < hiddenCards.length; i++) {
      hiddenCards[i].classList.add("active");

      hiddenCards[i].style.height = "auto";
      hiddenCards[i].style.overflow = "visible";
    }
  }
}
//FORM STUFF!!!!!!!!!!!!!!
const form = document.getElementById("contact-form");
const submissionMessage = document.getElementById("submission-message");

submissionMessage.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        form.style.display = "none";
        submissionMessage.style.display = "flex";
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => console.error("Error:", error));

  form.style.display = "none";
  document.getElementById("form-wrapper").style.display = "none";
  submissionMessage.style.display = "flex";
});

let submithover = false;

/*
function submitHover() {
  //'<i class="fa-solid fa-arrow-right fa-beat"></i>';

  if (submithover) {
    submithover = false;
    document.getElementById("submit-arrow").classList.remove("fa-beat");
  } else {
    submithover = true;
    document.getElementById("submit-arrow").classList.add("fa-beat");
  }
}
*/
