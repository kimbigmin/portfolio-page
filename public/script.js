
const menuBtn = document.querySelector('#nav-Btn');
const $navbar = document.querySelector('#navbar');


menuBtn.addEventListener('click', navbarToggle );


window.addEventListener('resize', () => {
  if (window.innerWidth > 720) {
    $navbar.style.transform = 'translateX(0px)';
  } else {
    $navbar.style.transform = 'translateX(-200px)';
  }
});


function navbarToggle () {

  if ($navbar.style.transform === 'translateX(-200px)') {
    $navbar.style.transform = 'translateX(0px)';
    $navbar.style.transition = 'transform 0.3s';
  } else {
    $navbar.style.transform = 'translateX(-200px)';
    
  }
}