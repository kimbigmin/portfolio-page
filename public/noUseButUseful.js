// 스크롤 한 번으로 다음 페이지로 이동하는 함수
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

// 스크롤 이동시 이동속도 조정 함수
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
