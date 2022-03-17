import "./portfolioModal.js";

const $menuBtn = document.querySelector("#nav-Btn");
const $navbar = document.querySelector("#navbar");

$menuBtn.addEventListener("click", navbarToggle);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 860) {
    $navbar.style.transform = "translateX(0px)";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
});

// navbar list 클릭 후 화면 전환시 부드러운 스크롤 기능
$navbar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const viewId = event.target.hash.slice(1);

    document.getElementById(viewId).scrollIntoView({ behavior: "smooth" });
  }
});

// Scroll에 따른 헤더바를 보여주고 숨기는 기능 이벤트
let scrollHeight = 0;

window.addEventListener("scroll", throttle(headerShowAndHide, 300));

// 여기서부터 이벤트 리스너 함수입니다.

function navbarToggle() {
  if ($navbar.style.transform === "translateX(-200px)") {
    $navbar.style.transform = "translateX(0px)";
    $navbar.style.transition = "transform 0.3s";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
}

function headerShowAndHide() {
  if (window.innerWidth >= 860) {
    if (scrollHeight > window.scrollY) {
      scrollHeight = window.scrollY;
      $navbar.style.top = "0px";
      $navbar.style.transition = "top ease 600ms";
    } else if (scrollHeight < window.scrollY) {
      scrollHeight = window.scrollY;
      $navbar.style.top = "-200px";
      $navbar.style.transition = "top ease 1500ms";
    }
  }
}

// 스로틀 함수
function throttle(callback, delay) {
  let timerId;

  return (event) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(event);
        timerId = null;
      },
      delay,
      event
    );
  };
}

function pageMoveByScroll() {
  console.log("실행");
  const pages = ["header", "profile", "introductions", "portfolio"];

  const top = document
    .getElementById(pages[currentPage])
    .getBoundingClientRect().top;

  if (currentPage >= pages.length - 1) {
    return;
  } else {
    durationScrollTo(top, 1000);
    currentPage++;
  }
}

function durationScrollTo(y, duration = 1000) {
  const stepY = (y - window.scrollY) / duration;

  const currentY = window.scrollY;

  const startTime = new Date().getTime();

  const scrollInterval = setInterval(() => {
    const now = new Date().getTime() - startTime;

    window.scrollTo({ top: currentY + stepY * now });

    if (duration <= now) {
      clearInterval(scrollInterval);
    }
  }, 1);
}
