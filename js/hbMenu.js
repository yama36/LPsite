const btn = [document.querySelector('.nav--top .HB__btn'), document.querySelector('.nav--fixd .HB__btn')];
const menu = [document.querySelector('.nav--top .HB__list'), document.querySelector('.nav--fixd .HB__list')];
const item = [document.querySelector('.nav--top .HB__item'), document.querySelector('.nav--fixd .HB__item')];


btn.forEach((e, index) => {
  e.addEventListener('click', () => {
    if (e.className !== "HB__btn inview") {
      e.classList.add('inview');
      menu[index].classList.add('inview');
      bodyScrollLock.disableBodyScroll(menu[index]);
    } else {
      e.classList.remove('inview');
      menu[index].classList.remove('inview');
      bodyScrollLock.clearAllBodyScrollLocks();
    }
  })
});

menu.forEach((e, index) => {
  const child = e.children;

  for (let i = 0; i < child.length; i++) {
    child[i].addEventListener('click', () => {
      menu[index].classList.remove('inview');
      btn[index].classList.remove('inview');
      bodyScrollLock.clearAllBodyScrollLocks();
    });
  };
});
