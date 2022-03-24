/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var projects = {
  kkabla: {
    title: "KKABAL - IT 부트캠프 정보 공유 웹 커뮤니티",
    githubUrl: "https://github.com/kimbigmin/KKABLA",
    videoUrl: "./video/kkabla.mp4",
    imgUrl: "./image/kkabla_notion.png"
  },
  inspace: {
    title: "INSPACE - 독서실 좌석 관리 어플리케이션",
    githubUrl: "https://github.com/kimbigmin/INSPACE",
    videoUrl: "",
    imgUrl: "./image/inspace_notion.png"
  },
  timeTracker: {
    title: "Time Tracker - 시간계획표 관리 및 분석 어플리케이션",
    githubUrl: "http://",
    videoUrl: "",
    imgUrl: ""
  }
};
var $main = document.querySelector("main");
var $portfolioBox = document.querySelector(".portfolio-box");
var isClickedModal = false; // 모달창 클릭 여부 확인

var modal; // 모달창 생성자 함수
// 포트폴리오 모달창 열기 이벤트 핸들러

$portfolioBox.addEventListener("click", function (e) {
  if (!isClickedModal) {
    var nodeId = e.target.closest("li").id;
    var isNode = document.querySelector(".portfolio-modal"); // 모달창 생성자 함수가 이미 있는 지 확인

    if (!isNode) {
      modal = new _Portfolio_js__WEBPACK_IMPORTED_MODULE_0__["default"](projects["".concat(nodeId)], $main);
      modal.render();
      isClickedModal = true;
      registerEvents(modal.$node);
    } else {
      modal.setState(projects["".concat(nodeId)]);
    }

    document.body.style.overflow = "hidden";
  }
}); // 모달창 닫기 이벤트 등록 함수

function registerEvents($target) {
  // 포트폴리오 모달창 닫기 이벤트 (모달 바깥 쪽 클릭시 & 닫기 버튼 클릭시)
  $target.addEventListener("click", function (e) {
    if (isClickedModal && e.target.className === "portfolio-modal") {
      modalClose();
    } else if (isClickedModal && e.target.className === "modal-closeBtn") {
      modalClose();
    }
  }); // 포트폴리오 모달창 닫기 이벤트 (ESC 입력시)

  window.addEventListener("keyup", function (e) {
    if (isClickedModal && e.key === "Escape") {
      modalClose();
    }
  });
} // 모달창 닫는 함수


function modalClose() {
  modal.remove();
  isClickedModal = false;
  document.body.style.overflow = "scroll";
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portfolio)
/* harmony export */ });
function Portfolio(initialState, $main) {
  var _this = this;

  this.state = initialState;
  this.$node = document.createElement("div");
  this.$node.className = "portfolio-modal";
  $main.appendChild(this.$node);

  this.render = function () {
    _this.$node.innerHTML = "\n      <div class=\"modal-contents\">\n        <li class=\"modal-closeBtn\">\uD398\uC774\uC9C0 \uB2EB\uAE30</li>\n        <div class=\"modal-title\">\n          <h2>".concat(_this.state.title, "</h2>\n          <a href=\"").concat(_this.state.githubUrl, "\" target=\"_blank\">GitHub\uC8FC\uC18C : ").concat(_this.state.githubUrl, "</a>\n        </div>\n        <video width=\"80%\" autoplay controls muted>\n          <source src=\"").concat(_this.state.videoUrl, "\" type=\"video/mp4\">\n        </video>\n        <img src=\"").concat(_this.state.imgUrl, "\"/>\n      </div>\n      ");
  };

  this.remove = function () {
    $main.removeChild(_this.$node);
  };

  this.setState = function (nextState) {
    _this.state = nextState;

    _this.render();
  };
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var $menuBtn = document.querySelector("#nav-Btn");
var $navbar = document.querySelector("#navbar"); // 네비게이션바 반응형 toggle로 변경하는 이벤트 핸들러

window.addEventListener("resize", function () {
  if (window.innerWidth >= 860) {
    $navbar.style.transform = "translateX(0px)";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
}); // 모바일 화면에서 메뉴 toggle 버튼을 누르면 show & hide 이벤트 핸들러

$menuBtn.addEventListener("click", navbarToggle);

function navbarToggle() {
  if ($navbar.style.transform === "translateX(-200px)") {
    $navbar.style.transform = "translateX(0px)";
    $navbar.style.transition = "transform 0.3s";
  } else {
    $navbar.style.transform = "translateX(-200px)";
  }
} // navbar list 클릭 후 화면 전환시 부드러운 스크롤 이벤트 핸들러


$navbar.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    var viewId = event.target.hash.slice(1);
    document.getElementById(viewId).scrollIntoView({
      behavior: "smooth"
    });
  }
}); // Scroll시 헤더바를 보여주고 숨기는 기능 이벤트 핸들러(쓰로틀 적용)

var scrollHeight = 0;
window.addEventListener("scroll", (0,_throttle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(headerShowAndHide, 300));

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

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throttle)
/* harmony export */ });
// 스로틀 함수
function throttle(callback, delay) {
  var timerId;
  return function (event) {
    if (timerId) return;
    timerId = setTimeout(function () {
      callback(event);
      timerId = null;
    }, delay, event);
  };
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_portfolioModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


})();

/******/ })()
;