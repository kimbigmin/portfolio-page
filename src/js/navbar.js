import throttle from "./throttle.js";

const $menuBtn = document.querySelector("#nav-Btn");
const $navbar = document.querySelector("#navbar");

// 네비게이션바 반응형 toggle로 변경하는 이벤트 핸들러
window.addEventListener("resize", () => {
  if (window.innerWidth >= 860) {
    $navbar.style.transform = "translateX(0px)";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
});

// 모바일 화면에서 메뉴 toggle 버튼을 누르면 show & hide 이벤트 핸들러
$menuBtn.addEventListener("click", navbarToggle);

function navbarToggle() {
  if ($navbar.style.transform === "translateX(-200px)") {
    $navbar.style.transform = "translateX(0px)";
    $navbar.style.transition = "transform 0.3s";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
}

// navbar list 클릭 후 화면 전환시 부드러운 스크롤 이벤트 핸들러
$navbar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const viewId = event.target.hash.slice(1);

    document.getElementById(viewId).scrollIntoView({ behavior: "smooth" });
  }
});

// Scroll시 헤더바를 보여주고 숨기는 기능 이벤트 핸들러(쓰로틀 적용)
let scrollHeight = 0;

window.addEventListener("scroll", throttle(headerShowAndHide, 300));

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
