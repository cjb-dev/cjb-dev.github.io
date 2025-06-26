let menu_clicked = false;
const center_btn_image = document.getElementById("center-img");
const paw_container = document.getElementById("paw");
const intro_text = document.getElementById("intro-box");
const button_desc = document.getElementById("button-desc");

//Opens paw
paw_container.classList.add("slide-in");
intro_text.classList.add("slide-in");

const center_button = document.getElementById("center-button");
center_button.addEventListener("click", animatePaw);

/*menu button images */
const about_me_button = document.getElementById("about-me-btn");
about_me_button.addEventListener("mouseover", function () {
  setMenuImage("about-me");
});

about_me_button.addEventListener("mouseout", function () {
  setMenuImage("hi");
});

const projects_button = document.getElementById("projects-btn");
projects_button.addEventListener("mouseover", function () {
  setMenuImage("projects");
});

projects_button.addEventListener("mouseout", function () {
  setMenuImage("hi");
});

const artwork_button = document.getElementById("artwork-btn");
artwork_button.addEventListener("mouseover", function () {
  setMenuImage("artwork");
});

artwork_button.addEventListener("mouseout", function () {
  setMenuImage("hi");
});

const contact_button = document.getElementById("contact-btn");
contact_button.addEventListener("mouseover", function () {
  setMenuImage("contact");
});

contact_button.addEventListener("mouseout", function () {
  setMenuImage("hi");
});

function animatePaw() {
  if (menu_clicked) {
    menu_clicked = false;
    paw_container.classList.remove("slide-out");
    paw_container.classList.add("slide-in");
    intro_text.classList.remove("slide-out");
    intro_text.classList.add("slide-in");
    setMenuImage("hi");
  } else {
    menu_clicked = true;
    paw_container.classList.remove("slide-in");
    paw_container.classList.add("slide-out");
    intro_text.classList.remove("slide-in");
    intro_text.classList.add("slide-out");
    setMenuImage("sleep");
  }
}

function setMenuImage(option) {
  switch (option) {
    case "hi":
      center_btn_image.src = "https://i.imgur.com/OYTKeHM.png";
      document.getElementById("button-desc").innerHTML =
        "Hi! My name is Christa.";
      break;
    case "sleep":
      center_btn_image.src = "https://i.imgur.com/8jkQAh9.png";
      document.getElementById("button-desc").innerHTML =
        "Hi! My name is Christa.";
      break;
    case "about-me":
      center_btn_image.src = "https://i.imgur.com/4bOPC5D.png";
      document.getElementById("button-desc").innerHTML = "About Me";
      break;
    case "projects":
      center_btn_image.src = "https://i.imgur.com/mhOObig.png";
      document.getElementById("button-desc").innerHTML = "Projects";
      break;
    case "artwork":
      center_btn_image.src = "https://i.imgur.com/D7o8FlG.png";
      document.getElementById("button-desc").innerHTML = "Artwork";
      break;
    case "contact":
      center_btn_image.src = "https://i.imgur.com/gfFSfck.png";
      document.getElementById("button-desc").innerHTML = "Contact";
      break;
    default:
      center_btn_image.src = "https://i.imgur.com/OYTKeHM.png";
      document.getElementById("button-desc").innerHTML =
        "Hi! My name is Christa.";
      break;
  }
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

// Add click-to-scroll behavior for each paw button
about_me_button.addEventListener("click", () => {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});

projects_button.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

artwork_button.addEventListener("click", () => {
  document.getElementById("artwork").scrollIntoView({ behavior: "smooth" });
});

contact_button.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
