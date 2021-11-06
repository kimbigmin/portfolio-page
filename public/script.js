

const $home = document.querySelector('#home-btn');
const $intro = document.querySelector('#introduction-btn');



$intro.addEventListener('click', ()=> {
  $home.scrollIntoView();

})