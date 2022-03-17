export default function Portfolio(initialState, $main) {
  this.state = initialState;

  this.$node = document.createElement("div");
  this.$node.className = "portfolio-modal";
  $main.appendChild(this.$node);

  this.render = () => {
    this.$node.innerHTML = `
  <div class="modal-contents">
    <li class="modal-closeBtn">페이지 닫기</li>
    <div class="modal-title">
      <h2>${this.state.title}</h2>
      <a href="${this.state.githubUrl}" target="_blank">GitHub주소 : ${this.state.githubUrl}</a>
    </div>
    <video width="80%" autoplay controls muted>
      <source src="${this.state.videoUrl}" type="video/mp4">
    </video>
    <img src="${this.state.imgUrl}"/>
  </div>
`;
  };

  this.remove = () => {
    $main.removeChild(this.$node);
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}
