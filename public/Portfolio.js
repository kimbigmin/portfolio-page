function Portfolio({ title, githubUrl, videoUrl, imgUrl, $main }) {
  this.title = title;
  this.githubUrl = githubUrl;
  this.videoUrl = videoUrl;
  this.imgUrl = imgUrl;

  const $portfolio = document.createElement("div");
  $portfolio.className = "portfolio-modal";

  $main.appendChild($portfolio);

  this.render = () => {
    $portfolio.innerHTML = `
  <div class="modal-contents">
    <li class="modal-closeBtn">페이지 닫기</li>
    <div class="modal-title">
      <h2>${this.title}</h2>
      <a href="${this.githubUrl}" target="_blank">GitHub주소 : ${this.githubUrl}</a>
    </div>
    <video width="80%" autoplay controls muted>
      <source src="${this.videoUrl}" type="video/mp4">
    </video>
    <img src="${this.imgUrl}"/>
  </div>
`;
  };

  this.remove = () => {
    $main.removeChild($portfolio);
  };

  this.setState = (nextState) => {
    this.title = nextState.title;
    this.githubUrl = nextState.githubUrl;
    this.videoUrl = nextState.videoUrl;
    this.imgUrl = nextState.imgUrl;
    this.render();
  };
}
