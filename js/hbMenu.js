const btn = document.querySelector('.nav--top .HB__btn');
const menu = document.querySelector('.nav--top .HB__list');


// スクロール禁止
function disableScroll(event) {
  event.preventDefault();
}

function hbMenu() {
  if (btn.className !== "HB__btn inview") {
    btn.classList.add('inview');
    menu.classList.add('inview');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('hidden');
  } else {
    btn.classList.remove('inview');
    menu.classList.remove('inview');
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.remove('hidden');
  }
}

btn.addEventListener('click', () => {
  hbMenu();
});