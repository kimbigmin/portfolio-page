function Portfolio() {
  const $portfolio = document.createElement("div");
  $portfolio.className = "portfolio-modal";
  document.querySelector("main").appendChild($portfolio);

  this.render = () => {
    $portfolio.innerHTML = `
    <div class="modal-contents">
      <li class="modal-closeBtn">닫기</li>
      <h2>KKABAL - IT 부트캠프 정보 공유 웹 커뮤니티</h2>
    </div>
  `;
  };
}
