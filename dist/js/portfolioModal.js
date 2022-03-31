import Portfolio from "./Portfolio.js";

const projects = {
  kkabla: {
    title: "KKABAL - IT 부트캠프 정보 공유 웹 커뮤니티",
    githubUrl: "https://github.com/kimbigmin/KKABLA",
    videoUrl: "./video/kkabla.mp4",
    imgUrl: "./image/kkabla_notion.png",
  },
  inspace: {
    title: "INSPACE - 독서실 좌석 관리 어플리케이션",
    githubUrl: "https://github.com/kimbigmin/INSPACE",
    videoUrl: "./video/inspace.mp4",
    imgUrl: "./image/inspace_notion.png",
  },
  timeTracker: {
    title: "Time Tracker - 시간계획표 관리 및 분석 어플리케이션",
    githubUrl: "http://",
    videoUrl: "",
    imgUrl: "",
  },
};

const $main = document.querySelector("main");
const $portfolioBox = document.querySelector(".portfolio-box");

let isClickedModal = false; // 모달창 클릭 여부 확인
let modal; // 모달창 생성자 함수

// 포트폴리오 모달창 열기 이벤트 핸들러
$portfolioBox.addEventListener("click", (e) => {
  if (!isClickedModal) {
    const nodeId = e.target.closest("li").id;
    const isNode = document.querySelector(".portfolio-modal"); // 모달창 생성자 함수가 이미 있는 지 확인

    if (!isNode) {
      modal = new Portfolio(projects[`${nodeId}`], $main);
      modal.render();
      isClickedModal = true;
      registerEvents(modal.$node);
    } else {
      modal.setState(projects[`${nodeId}`]);
    }
    document.body.style.overflow = "hidden";
  }
});

// 모달창 닫기 이벤트 등록 함수
function registerEvents($target) {
  // 포트폴리오 모달창 닫기 이벤트 (모달 바깥 쪽 클릭시 & 닫기 버튼 클릭시)
  $target.addEventListener("click", (e) => {
    if (isClickedModal && e.target.className === "portfolio-modal") {
      modalClose();
    } else if (isClickedModal && e.target.className === "modal-closeBtn") {
      modalClose();
    }
  });
  // 포트폴리오 모달창 닫기 이벤트 (ESC 입력시)
  window.addEventListener("keyup", (e) => {
    if (isClickedModal && e.key === "Escape") {
      modalClose();
    }
  });
}
// 모달창 닫는 함수
function modalClose() {
  modal.remove();
  isClickedModal = false;
  document.body.style.overflow = "scroll";
}
