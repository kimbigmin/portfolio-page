function Portfolio() {
  const $portfolio = document.createElement("div");
  $portfolio.className = "portfolio-modal";
  document.querySelector("main").appendChild($portfolio);

  this.render = () => {
    $portfolio.innerHTML = `
    <div class="modal-contents">
      <li class="modal-closeBtn">페이지 닫기</li>
      <div class="modal-title">
        <h2>KKABAL - IT 부트캠프 정보 공유 웹 커뮤니티</h2>
        <a href="https://github.com/kimbigmin/KKABLA" target="_blank">GitHub주소 : https://github.com/kimbigmin/KKABLA</a>
      </div>
      <video width="80%" autoplay controls muted>
        <source src="./video/kkabla.mp4" type="video/mp4">
      </video>
      <img src="./image/kkabla_notion.png"/>
    </div>
  `;
  };
}
