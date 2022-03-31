export default function Portfolio(initialState, $main) {
  this.state = initialState;

  this.$node = document.createElement("div");
  this.$node.className = "portfolio-modal";
  $main.appendChild(this.$node);

  this.render = () => {
    this.$node.innerHTML = `
      <div class="modal-contents">
        <div class="modal-closeBtn">페이지 닫기</div>
        <div class="modal-title">
          <h2>${this.state.title}</h2>
          <a href="${this.state.githubUrl}" target="_blank">📎 GitHub URL : ${
      this.state.githubUrl
    }</a>
          ${
            this.state.appUrl
              ? `<a href="${this.state.appUrl}" target="_blank">
              📎 배포 URL : ${this.state.appUrl}
              </a>`
              : ""
          }
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
