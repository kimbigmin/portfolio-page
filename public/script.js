const menuBtn = document.querySelector("#nav-Btn");
const $navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", navbarToggle);

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    $navbar.style.transform = "translateX(0px)";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
});

function navbarToggle() {
  if ($navbar.style.transform === "translateX(-200px)") {
    $navbar.style.transform = "translateX(0px)";
    $navbar.style.transition = "transform 0.3s";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
}

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 300) {
//     document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
//   }
// });

document.getElementById("home-Btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("profile-Btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("introductions-Btn").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .getElementById("introductions")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("portfolio-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
});
