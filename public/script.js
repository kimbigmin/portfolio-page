const $main = document.querySelector("main");

const projects = {
  kkabla: {
    title: "KKABAL - IT 부트캠프 정보 공유 웹 커뮤니티",
    githubUrl: "https://github.com/kimbigmin/KKABLA",
    videoUrl: "./video/kkabla.mp4",
    imgUrl: "./image/kkabla_notion.png",
    $main: $main,
  },
  inspace: {
    title: "INSPACE - 독서실 좌석 관리 어플리케이션",
    githubUrl: "http://",
    videoUrl: "",
    imgUrl: "",
    $main: $main,
  },
  timeTracker: {
    title: "Time Tracker - 시간계획표 관리 및 분석 어플리케이션",
    githubUrl: "http://",
    videoUrl: "",
    imgUrl: "",
    $main: $main,
  },
};

const $menuBtn = document.querySelector("#nav-Btn");
const $navbar = document.querySelector("#navbar");
const $portfolioBox = document.querySelector(".portfolio-box");

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

// 포트폴리오 모달창 열기 이벤트
let isClickedModal = false;
let $portfolioModal;
let modal;

$portfolioBox.addEventListener("click", (e) => {
  const nodeId = e.target.closest("li").id;
  const isNode = document.querySelector(".portfolio-modal");

  if (!isClickedModal && isNode) {
    modal.setState(projects[`${nodeId}`]);
  }

  if (!isClickedModal && !isNode) {
    modal = new Portfolio(projects[`${nodeId}`]);
    modal.render();
    $portfolioModal = document.querySelector(".portfolio-modal");
    isClickedModal = true;
    registerEvents($portfolioModal);
  }
  document.body.style.overflow = "hidden";
});

// 모달창 닫기 이벤트 등록 함수
function registerEvents($target) {
  $target.addEventListener("click", (e) => {
    if (isClickedModal && e.target.className === "portfolio-modal") {
      modalClose(modal); // 포트폴리오 모달창 닫기 이벤트 (바깥 쪽 클릭시)
    } else if (isClickedModal && e.target.className === "modal-closeBtn") {
      modalClose(modal); // 포트폴리오 모달창 닫기 이벤트 (닫기 버튼 클릭시)
    }
  });
  // 포트폴리오 모달창 닫기 이벤트 (ESC 입력시)
  window.addEventListener("keyup", (e) => {
    if (isClickedModal && e.key === "Escape") {
      modalClose(modal);
    }
  });
}

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

function modalClose($modal) {
  $modal.remove();
  isClickedModal = false;
  document.body.style.overflow = "scroll";
}
